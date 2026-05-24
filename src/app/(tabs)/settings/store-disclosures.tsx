import { LegalDocumentContent } from "@/components/legal-document-content";
import { Screen } from "@/components/screen";
import { dataPracticesDocumentData } from "@/data/legal/legal-document-data";

const StoreDisclosuresSettingsScreen = () => {
  return (
    <Screen>
      <LegalDocumentContent document={dataPracticesDocumentData} />
    </Screen>
  );
};

export default StoreDisclosuresSettingsScreen;
