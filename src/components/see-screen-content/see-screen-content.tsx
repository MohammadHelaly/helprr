import { useIsFocused } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import {
  initExecutorch,
  isAvailable as isExecutorchAvailable,
  SSDLITE_320_MOBILENET_V3_LARGE,
  useObjectDetection,
  type Detection,
} from "react-native-executorch";
import { ExpoResourceFetcher } from "react-native-executorch-expo-resource-fetcher";
import {
  CommonResolutions,
  useCameraDevice,
  useCameraPermission,
  useFrameOutput,
  type Frame,
} from "react-native-vision-camera";
import { scheduleOnRN } from "react-native-worklets";

import { Button } from "@/components/button";
import { DetectionLabel } from "@/components/detection-label";
import { SeeCameraView } from "@/components/see-camera-view";
import { Warning } from "@/components/warning";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { openAppSettings } from "@/lib/permissions/app-permissions";

const MIN_SCORE = 0.7;

initExecutorch({
  resourceFetcher: ExpoResourceFetcher,
});

const toDisplayLabel = (value: string) =>
  value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const SeeScreenContent = () => {
  const isFocused = useIsFocused();
  const device = useCameraDevice("back");
  const { canRequestPermission, hasPermission, requestPermission } =
    useCameraPermission();
  const { speak, stop } = useSpeechSynthesis();
  const objectDetection = useObjectDetection({
    model: SSDLITE_320_MOBILENET_V3_LARGE,
    preventLoad: !isExecutorchAvailable,
  });
  const runObjectDetection = objectDetection.runOnFrame;
  const isObjectDetectionReady =
    objectDetection.isReady && !!runObjectDetection;

  const [label, setLabel] = useState<string>();
  const [cameraReady, setCameraReady] = useState(false);

  const handleCameraPermission = useCallback(async () => {
    if (canRequestPermission) {
      await requestPermission();
      return;
    }

    await openAppSettings();
  }, [canRequestPermission, requestPermission]);

  useEffect(() => {
    if (isFocused && !hasPermission && canRequestPermission) {
      void requestPermission();
    }
  }, [canRequestPermission, hasPermission, isFocused, requestPermission]);

  useEffect(() => {
    if (!isFocused) {
      void stop();
    }
  }, [isFocused, stop]);

  useEffect(() => {
    if (!isFocused) {
      return;
    }

    void speak(cameraReady && label ? label : "Loading", "en-US");
  }, [cameraReady, isFocused, label, speak]);

  const updateDetections = useCallback(
    (detections: Detection[]) => {
      const prediction = detections[0];

      if (!prediction) {
        return;
      }

      const nextLabel = toDisplayLabel(String(prediction.label));
      setLabel((currentLabel) =>
        currentLabel === nextLabel ? currentLabel : nextLabel,
      );
    },
    [setLabel],
  );

  const frameOutput = useFrameOutput({
    targetResolution: CommonResolutions.VGA_16_9,
    pixelFormat: "rgb",
    dropFramesWhileBusy: true,
    enablePreviewSizedOutputBuffers: true,
    onFrame: useCallback(
      (frame: Frame) => {
        "worklet";

        try {
          if (!isObjectDetectionReady) {
            return;
          }

          const detections = runObjectDetection(frame, false, {
            detectionThreshold: MIN_SCORE,
          });

          if (detections.length > 0) {
            scheduleOnRN(updateDetections, detections);
          }
        } catch (error) {
          const message =
            error instanceof Error ? error.message : String(error);

          if (!message.includes("Failed to lock AHardwareBuffer")) {
            console.error("Object detection frame error:", error);
          }
        } finally {
          frame.dispose();
        }
      },
      [isObjectDetectionReady, runObjectDetection, updateDetections],
    ),
  });

  if (!isFocused) {
    return null;
  }

  if (!hasPermission) {
    return (
      <View className="flex-1 bg-light-grey">
        <Warning
          icon="camera-outline"
          title="Permission needed"
          text="Allow camera access to identify objects around you."
        />
        <Button className="mx-8 mb-8" onPress={handleCameraPermission}>
          {canRequestPermission ? "Grant camera access" : "Open settings"}
        </Button>
      </View>
    );
  }

  if (!isExecutorchAvailable) {
    return (
      <View className="flex-1 bg-light-grey">
        <Warning
          icon="alert-circle-outline"
          title="Object detection unavailable"
          text="This device does not support the native object detection runtime."
        />
      </View>
    );
  }

  if (objectDetection.error) {
    return (
      <View className="flex-1 bg-light-grey">
        <Warning
          icon="alert-circle-outline"
          title="Object detection unavailable"
          text="There was an issue loading the object detection model."
        />
      </View>
    );
  }

  if (!device) {
    return (
      <View className="flex-1 bg-light-grey">
        <Warning
          icon="camera-outline"
          title="Camera unavailable"
          text="No back camera was found on this device."
        />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <SeeCameraView
        device={device}
        frameOutput={frameOutput}
        isActive={isFocused && hasPermission && isObjectDetectionReady}
        onStarted={() => {
          setLabel(undefined);
          setCameraReady(true);
        }}
        onStopped={() => {
          setLabel(undefined);
          setCameraReady(false);
        }}
      />
      <DetectionLabel label={label} />
    </View>
  );
};

export { SeeScreenContent };
