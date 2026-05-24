import { FlatList, Text, View } from "react-native";

import {
  libraryLicenses,
  mitLicenseTemplate,
  type LibraryLicense,
} from "@/data/license-data";

const AcknowledgementsSettingsContent = () => {
  const renderItem = ({ item }: { item: LibraryLicense }) => {
    const licenseText =
      item.license === "MIT License"
        ? mitLicenseTemplate[0] + item.libraryLicense + mitLicenseTemplate[1]
        : item.libraryLicense;

    return (
      <View className="mx-4 my-2 items-start justify-start gap-2">
        <Text className="text-sm font-bold text-black">{item.libraryName}</Text>
        <Text className="text-[8px] text-black">{licenseText}</Text>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <Text className="m-4 text-lg font-bold text-black">
          Helprr makes use of the following third-party libraries:
        </Text>
      }
      data={libraryLicenses}
      keyExtractor={(item, index) => `${item.libraryName}-${index}`}
      renderItem={renderItem}
    />
  );
};

export { AcknowledgementsSettingsContent };
