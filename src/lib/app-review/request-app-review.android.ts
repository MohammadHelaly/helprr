import { Linking } from "react-native";

import { appUrls } from "@/constants/urls";

const requestAppReview = async () => {
  try {
    await Linking.openURL(appUrls.androidReview);
  } catch {
    await Linking.openURL(appUrls.playStoreReview);
  }
};

export { requestAppReview };
