import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ffffff" },
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTitleStyle: {
          color: "#000000",
          fontSize: 36,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Settings" }} />
      <Stack.Screen name="general" options={{ title: "General" }} />
      <Stack.Screen name="permissions" options={{ title: "Permissions" }} />
      <Stack.Screen name="language" options={{ title: "Language" }} />
      <Stack.Screen name="more" options={{ title: "More" }} />
      <Stack.Screen name="about" options={{ title: "About Helprr" }} />
      <Stack.Screen name="legal" options={{ title: "Legal" }} />
      <Stack.Screen name="license" options={{ title: "License" }} />
      <Stack.Screen
        name="acknowledgements"
        options={{ title: "Acknowledgements" }}
      />
    </Stack>
  );
}
