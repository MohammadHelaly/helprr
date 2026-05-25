import { ScrollView, Text, View } from "react-native";

import type { LegalDocumentData } from "@/data/legal/legal-document-data";

type Props = {
  document: LegalDocumentData;
};

const LegalDocumentContent = (props: Props) => {
  const { document } = props;

  return (
    <ScrollView className="flex-1" contentContainerClassName="items-center">
      <View className="w-full max-w-screen-sm px-4">
        <Text className="mt-4 text-2xl font-bold text-black">
          {document.title}
        </Text>
        <Text className="mt-2 text-xs font-semibold text-grey">
          {document.status}
        </Text>
        <Text className="mt-1 text-xs text-grey">
          Last updated: {document.updatedAt}
        </Text>

        <View className="py-4">
          {document.sections.map((section) => (
            <View className="mb-5 gap-2" key={section.heading}>
              <Text className="text-base font-bold text-black">
                {section.heading}
              </Text>
              {section.body.map((paragraph) => (
                <Text className="text-sm leading-5 text-black" key={paragraph}>
                  {paragraph}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export { LegalDocumentContent };
