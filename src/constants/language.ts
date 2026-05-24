export const languageOptions = {
  english: {
    label: "English",
    locale: "en-US",
  },
  arabic: {
    label: "Arabic",
    locale: "ar-EG",
  },
} as const;

export type LanguageLocale =
  (typeof languageOptions)[keyof typeof languageOptions]["locale"];

export const defaultLanguage: LanguageLocale = "en-US";
