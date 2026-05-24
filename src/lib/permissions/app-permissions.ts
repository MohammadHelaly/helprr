import { Alert, Linking } from "react-native";
import { Camera } from "expo-camera";
import { ExpoSpeechRecognitionModule } from "expo-speech-recognition";

const getCameraPermission = async () => {
  try {
    return await Camera.getCameraPermissionsAsync();
  } catch {
    Alert.alert(
      "Error Getting Camera Permission",
      "An error occurred while trying to get camera permissions. Please try again.",
    );
    return null;
  }
};

const requestCameraPermission = async () => {
  return Camera.requestCameraPermissionsAsync();
};

const getMicrophonePermission = async () => {
  try {
    return await ExpoSpeechRecognitionModule.getMicrophonePermissionsAsync();
  } catch {
    Alert.alert(
      "Error Getting Microphone Permission",
      "An error occurred while trying to get microphone permissions. Please try again.",
    );
    return null;
  }
};

const requestMicrophonePermission = async () => {
  return ExpoSpeechRecognitionModule.requestMicrophonePermissionsAsync();
};

const getSpeechRecognitionPermission = async () => {
  try {
    return await ExpoSpeechRecognitionModule.getSpeechRecognizerPermissionsAsync();
  } catch {
    return null;
  }
};

const requestSpeechRecognitionPermission = async () => {
  return ExpoSpeechRecognitionModule.requestSpeechRecognizerPermissionsAsync();
};

const openAppSettings = async () => {
  await Linking.openSettings();
};

export {
  getCameraPermission,
  getMicrophonePermission,
  getSpeechRecognitionPermission,
  openAppSettings,
  requestCameraPermission,
  requestMicrophonePermission,
  requestSpeechRecognitionPermission,
};
