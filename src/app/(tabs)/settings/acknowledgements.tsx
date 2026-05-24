import { ScrollView, Text } from 'react-native';

import { Screen } from '@/components/screen';
import { libraryLicenses, mitLicenseTemplate } from '@/data/license-data';

export default function AcknowledgementsSettingsScreen() {
  return (
    <Screen>
      <ScrollView className="px-6 py-6">
        <Text className="mb-4 text-lg font-bold text-black">
          Helprr makes use of the following third-party libraries:
        </Text>
        {libraryLicenses.map((library) => {
          const licenseText =
            library.license === 'MIT License'
              ? mitLicenseTemplate[0] + library.libraryLicense + mitLicenseTemplate[1]
              : library.libraryLicense;

          return (
            <Text
              key={library.libraryName}
              className="border-b border-lightGrey py-4 text-xs leading-5 text-black">
              <Text className="text-sm font-bold">{library.libraryName}</Text>
              {'\n\n'}
              {licenseText}
            </Text>
          );
        })}
      </ScrollView>
    </Screen>
  );
}
