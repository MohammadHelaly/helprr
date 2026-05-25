import { router } from "expo-router";
import { ScrollView } from "react-native";

import { SettingsOption } from "@/components/settings-option";

const LegalSettingsContent = () => {
  return (
    <ScrollView
      className="flex-1"
      contentContainerClassName="grow items-center justify-center"
    >
      <SettingsOption
        label="Privacy Policy"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/privacy")}
      />
      <SettingsOption
        label="Terms of Use"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/terms")}
      />
      <SettingsOption
        label="Safety Notice"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/safety")}
      />
      <SettingsOption
        label="License"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/license")}
      />
      <SettingsOption
        label="Acknowledgements"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/acknowledgements")}
      />
      <SettingsOption
        label="Store Disclosure Notes"
        trailingIcon="chevron-forward-sharp"
        onPress={() => router.push("/settings/store-disclosures")}
      />
    </ScrollView>
  );
};

export { LegalSettingsContent };
