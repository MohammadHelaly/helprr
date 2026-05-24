import { Alert, Share } from "react-native";

import { appUrls } from "@/lib/external-links/urls";

const shareApp = async () => {
  try {
    const result = await Share.share(
      {
        message: "Helprr | Your hand held guide dog.",
        url: appUrls.repository,
        title: "Helprr",
      },
      {
        dialogTitle: "Share Helprr",
        subject: "Helprr | Your hand held guide dog.",
      },
    );

    if (result.action === Share.sharedAction && result.activityType) {
      Alert.alert("Success", "Thank you for sharing Helprr!");
    }
  } catch {
    Alert.alert(
      "Something Went Wrong",
      "An error occurred while trying to share Helprr. Please try again.",
    );
  }
};

export { shareApp };
