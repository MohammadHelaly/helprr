export const languageOptions = {
  english: {
    label: "English",
    symbol: "EN",
    locale: "en-US",
    direction: "ltr",
  },
  arabic: {
    label: "Arabic",
    symbol: "AR",
    locale: "ar-EG",
    direction: "rtl",
  },
} as const;

export const supportedLanguages = Object.values(languageOptions);

export type LanguageOption = (typeof supportedLanguages)[number];

export type LanguageLocale = LanguageOption["locale"];

export const defaultLanguage = languageOptions.english.locale;
