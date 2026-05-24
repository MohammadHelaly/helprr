import { LegalDocumentContent } from "@/components/legal-document-content";
import { Screen } from "@/components/screen";
import { privacyPolicyDocumentData } from "@/data/legal/legal-document-data";

const PrivacySettingsScreen = () => {
  return (
    <Screen>
      <LegalDocumentContent document={privacyPolicyDocumentData} />
    </Screen>
  );
};

export default PrivacySettingsScreen;
