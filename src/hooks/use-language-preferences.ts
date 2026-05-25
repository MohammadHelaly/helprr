import { useCallback, useState } from "react";

import type { LanguageLocale } from "@/constants/language";
import {
  getAppLanguagePreference,
  setAppLanguagePreference,
} from "@/lib/language/language-preferences";

const useConversationLanguage = () => {
  const [language, setLanguage] = useState<LanguageLocale>(
    getAppLanguagePreference,
  );

  const selectLanguage = useCallback((next: LanguageLocale) => {
    setLanguage(next);
  }, []);

  return { language, selectLanguage };
};

const useAppLanguage = () => {
  const [language, setLanguage] = useState<LanguageLocale>(() =>
    getAppLanguagePreference(),
  );

  const selectLanguage = useCallback((next: LanguageLocale) => {
    setAppLanguagePreference(next);
    setLanguage(next);
  }, []);

  return { language, selectLanguage };
};

export { useAppLanguage, useConversationLanguage };
