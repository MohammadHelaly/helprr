import { Alert, Linking } from "react-native";
import * as StoreReview from "expo-store-review";

const requestAppReview = async () => {
  try {
    if (await StoreReview.isAvailableAsync()) {
      await StoreReview.requestReview();
      return;
    }

    const storeUrl = StoreReview.storeUrl();
    if (storeUrl) {
      await Linking.openURL(storeUrl);
      return;
    }

    Alert.alert(
      "Store Review Not Available",
      "Store review is not available on this device. Please rate Helprr on the app store instead.",
    );
  } catch {
    Alert.alert(
      "Something Went Wrong",
      "An error occurred while trying to rate Helprr. Please try again.",
    );
  }
};

export { requestAppReview };
