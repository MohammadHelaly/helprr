import { router } from "expo-router";

import { SettingsOption } from "@/components/settings-option";
import { WebsiteCard } from "@/components/website-card";
import { requestAppReview } from "@/lib/app-review/request-app-review";
import { shareApp } from "@/lib/share/share-app";

const AboutSettings = () => {
  return (
    <>
      <WebsiteCard />
      <SettingsOption
        label="Rate Helprr"
        trailingIcon="chevron-forward-sharp"
        onPress={requestAppReview}
      />
      <SettingsOption
        label="Share Helprr"
        trailingIcon="chevron-forward-sharp"
        onPress={shareApp}
      />
      <SettingsOption
        label="Legal"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/legal")}
      />
    </>
  );
};

export { AboutSettings };
