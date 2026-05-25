import { LegalDocumentContent } from "@/components/legal-document-content";
import { Screen } from "@/components/screen";
import { safetyNoticeDocumentData } from "@/data/legal/legal-document-data";

const SafetySettingsScreen = () => {
  return (
    <Screen>
      <LegalDocumentContent document={safetyNoticeDocumentData} />
    </Screen>
  );
};

export default SafetySettingsScreen;
