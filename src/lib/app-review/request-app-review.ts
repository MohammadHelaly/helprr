import { Linking } from "react-native";

import { appUrls } from "@/constants/urls";

const requestAppReview = async () => {
  await Linking.openURL(appUrls.playStoreReview);
};

export { requestAppReview };
