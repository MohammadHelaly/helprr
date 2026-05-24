import { router } from "expo-router";

import { SettingsOption } from "@/components/settings-option";

const LegalSettings = () => {
  return (
    <>
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
    </>
  );
};

export { LegalSettings };
