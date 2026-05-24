import { Stack } from "expo-router";

import { colors, sizes } from "@/constants/theme";

const SettingsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTintColor: colors.black,
        headerTitleStyle: {
          color: colors.black,
          fontSize: sizes.font.xxxl,
          fontWeight: "bold",
        },
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Settings" }} />
      <Stack.Screen name="general" options={{ title: "General" }} />
      <Stack.Screen name="permissions" options={{ title: "Permissions" }} />
      <Stack.Screen name="language" options={{ title: "Language" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="legal" options={{ title: "Legal" }} />
      <Stack.Screen name="license" options={{ title: "License" }} />
      <Stack.Screen
        name="acknowledgements"
        options={{ title: "Acknowledgements" }}
      />
    </Stack>
  );
};

export default SettingsLayout;
