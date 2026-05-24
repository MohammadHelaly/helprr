import { Linking } from "react-native";

import { appUrls } from "@/lib/external-links/urls";

const requestAppReview = async () => {
  await Linking.openURL(appUrls.playStoreReview);
};

export { requestAppReview };
