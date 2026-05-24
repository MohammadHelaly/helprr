import "@/global.css";

import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { migrateDatabase } from "@/lib/db/client";

const TabLayout = () => {
  useEffect(() => {
    migrateDatabase();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default TabLayout;
