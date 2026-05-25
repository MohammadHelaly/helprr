import "@/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default TabLayout;
