import { Alert, Linking } from "react-native";

const openExternalUrl = async (url: string) => {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert(
      "Unable to Open Link",
      "Helprr could not open this link. Please try again later.",
    );
  }
};

export { openExternalUrl };
