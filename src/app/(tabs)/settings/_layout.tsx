import { Stack } from "expo-router/js-stack";

import { colors, sizes } from "@/constants/theme";

const SettingsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          height: sizes.sizing.xxxxl,
        },
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTintColor: colors.black,
        headerTitleStyle: {
          color: colors.black,
          fontSize: sizes.font.xxxl,
          lineHeight: sizes.font.xxxxl,
          fontWeight: "bold",
          paddingBottom: sizes.spacing.xs,
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
      <Stack.Screen name="privacy" options={{ title: "Privacy Policy" }} />
      <Stack.Screen name="terms" options={{ title: "Terms of Use" }} />
      <Stack.Screen name="safety" options={{ title: "Safety Notice" }} />
      <Stack.Screen
        name="store-disclosures"
        options={{ title: "Store Disclosure Notes" }}
      />
      <Stack.Screen name="license" options={{ title: "License" }} />
      <Stack.Screen
        name="acknowledgements"
        options={{
          title: "Acknowledgements",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.black,
            fontSize: sizes.font.lg,
            lineHeight: sizes.font.xl,
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
