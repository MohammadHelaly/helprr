import { Stack } from "expo-router/js-stack";

import { colors, sizes } from "@/constants/theme";

const ListenLayout = () => {
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
      <Stack.Screen name="index" options={{ title: "Listen" }} />
      <Stack.Screen
        name="conversation/[id]"
        options={{
          title: "Conversation",
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

export default ListenLayout;
