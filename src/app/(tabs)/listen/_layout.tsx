import { Stack } from "expo-router";

import { colors, sizes } from "@/constants/theme";

const ListenLayout = () => {
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
      <Stack.Screen name="index" options={{ title: "Listen" }} />
      <Stack.Screen
        name="conversation/[id]"
        options={{
          title: "Conversation",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: sizes.font.lg,
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
};

export default ListenLayout;
