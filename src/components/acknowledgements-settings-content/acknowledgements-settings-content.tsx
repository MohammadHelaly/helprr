import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

import {
  openSourceNotices,
  type OpenSourceNotice,
} from "@/data/legal/generated/open-source-notice-data";

const AcknowledgementsSettingsContent = () => {
  const renderItem = ({ item }: { item: OpenSourceNotice }) => {
    return (
      <View className="mx-4 my-2 items-start justify-start gap-2">
        <Text className="text-sm font-bold text-black">
          {item.name} {item.version}
        </Text>
        <Text className="text-xs font-semibold text-black">
          License: {item.license}
        </Text>
        {item.repository ? (
          <Text className="text-[8px] text-black">{item.repository}</Text>
        ) : null}
        <Text className="text-[8px] text-black">
          {item.licenseText || "License text unavailable in package metadata."}
        </Text>
      </View>
    );
  };

  return (
    <FlashList
      ListHeaderComponent={
        <Text className="m-4 text-base font-bold text-black">
          Helprr makes use of the following third-party libraries:
        </Text>
      }
      data={openSourceNotices}
      keyExtractor={(item) => `${item.name}-${item.version}`}
      renderItem={renderItem}
      style={{ flex: 1 }}
    />
  );
};

export { AcknowledgementsSettingsContent };
