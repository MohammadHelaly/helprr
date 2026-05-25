import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  type CSSAnimationKeyframes,
} from "react-native-reanimated";

import { Icon } from "@/components/icon";
import { colors, sizes } from "@/constants/theme";

interface Props {
  isListening: boolean;
  errorMessage: string | null;
  partialTranscript: string;
  onStart: () => void;
  onStop: () => void;
}

const recordTransitionDuration = 200;
const recordHazeTransitionDuration = 400;
const recordPulseDuration = 600;

const recordPulse: CSSAnimationKeyframes = {
  from: { backgroundColor: colors.pink, transform: [{ scale: 1 }] },
  to: { backgroundColor: colors["pink-light"], transform: [{ scale: 1.1 }] },
};

const recordHazePulse: CSSAnimationKeyframes = {
  from: {
    backgroundColor: colors.pink,
    opacity: 0.2,
    transform: [{ scale: 0.8 }],
  },
  to: {
    backgroundColor: colors["pink-haze"],
    opacity: 0.4,
    transform: [{ scale: 1 }],
  },
};

const statusEntering = FadeIn.duration(200);
const statusExiting = FadeOut.duration(200);

const VoiceRecordButton = (props: Props) => {
  const { isListening, errorMessage, partialTranscript, onStart, onStop } =
    props;

  const statusText = errorMessage ?? partialTranscript;

  const buttonSize = isListening ? sizes.sizing.xl : sizes.sizing.md;
  const pulseAnimation = isListening ? recordPulse : "none";
  const hazeAnimation = isListening ? recordHazePulse : "none";
  const pulseIterationCount = isListening ? "infinite" : 0;
  const pulseDelay = isListening ? recordTransitionDuration : 0;

  return (
    <View
      className="absolute bottom-20 end-0 start-0 z-10 flex flex-col items-center justify-center"
      style={{
        gap: isListening ? sizes.spacing.lg : sizes.spacing.xs,
      }}
    >
      <View
        className="items-center justify-center"
        style={{ height: sizes.sizing.sm }}
      >
        {statusText ? (
          <Animated.View
            className="max-w-72 rounded-full bg-black px-4 py-2"
            entering={statusEntering}
            exiting={statusExiting}
          >
            <Text className="text-center text-xs text-white" numberOfLines={2}>
              {statusText}
            </Text>
          </Animated.View>
        ) : null}
      </View>
      <Pressable onPressIn={onStart} onPressOut={onStop}>
        <Animated.View
          className="items-center justify-center"
          style={{
            height: buttonSize,
            transitionDuration: recordTransitionDuration,
            transitionProperty: ["height", "width"],
            transitionTimingFunction: "ease-out",
            width: buttonSize,
          }}
        >
          <Animated.View
            className="absolute items-center justify-center"
            style={{
              height: sizes.sizing.xxl,
              opacity: isListening ? 1 : 0,
              transitionDuration: recordHazeTransitionDuration,
              transitionProperty: ["opacity"],
              transitionTimingFunction: "ease-out",
              width: sizes.sizing.xxl,
            }}
          >
            <Animated.View
              className="h-full w-full rounded-full"
              style={{
                animationDelay: pulseDelay,
                animationDirection: "alternate",
                animationDuration: recordPulseDuration,
                animationIterationCount: pulseIterationCount,
                animationName: hazeAnimation,
                animationTimingFunction: "ease-in-out",
              }}
            />
          </Animated.View>
          <Animated.View
            className={`flex items-center justify-center rounded-full ${
              isListening ? "bg-pink" : errorMessage ? "bg-red-600" : "bg-black"
            }`}
            style={{
              animationDelay: pulseDelay,
              animationDirection: "alternate",
              animationDuration: recordPulseDuration,
              animationIterationCount: pulseIterationCount,
              animationName: pulseAnimation,
              animationTimingFunction: "ease-in-out",
              height: buttonSize,
              transitionDuration: recordTransitionDuration,
              transitionProperty: ["height", "width"],
              transitionTimingFunction: "ease-out",
              width: buttonSize,
            }}
          >
            <Icon
              name="mic-sharp"
              size={isListening ? sizes.icon.xl : sizes.icon.md}
              color={colors.white}
            />
          </Animated.View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export { VoiceRecordButton };
