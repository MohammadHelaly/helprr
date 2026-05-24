import { Tabs } from "expo-router";

import { Icon } from "@/components/icon";
import { colors, sizes } from "@/constants/theme";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          height: sizes.tabBarHeight,
          paddingTop: sizes.tabBarPaddingTop,
          paddingBottom: sizes.tabBarPaddingBottom,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: colors.white,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="listen"
        options={{
          title: "Listen",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ear-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="see"
        options={{
          title: "See",
          tabBarIcon: ({ color, size }) => (
            <Icon name="eye-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
