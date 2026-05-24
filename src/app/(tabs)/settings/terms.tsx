import { LegalDocumentContent } from "@/components/legal-document-content";
import { Screen } from "@/components/screen";
import { termsOfUseDocumentData } from "@/data/legal/legal-document-data";

const TermsSettingsScreen = () => {
  return (
    <Screen>
      <LegalDocumentContent document={termsOfUseDocumentData} />
    </Screen>
  );
};

export default TermsSettingsScreen;
