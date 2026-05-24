import { Stack } from "expo-router";

import { colors, sizes } from "@/constants/theme";

const ListenLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTitleStyle: {
          color: colors.black,
          fontSize: sizes.headerTitle,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Listen" }} />
      <Stack.Screen
        name="conversation/[id]"
        options={{ title: "Conversation" }}
      />
    </Stack>
  );
};

export default ListenLayout;
