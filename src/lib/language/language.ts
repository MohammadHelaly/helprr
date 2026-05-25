import {
  supportedLanguages,
  type LanguageLocale,
  type LanguageOption,
} from "@/constants/language";

const languageOptionsByLocale = supportedLanguages.reduce(
  (options, language) => ({
    ...options,
    [language.locale]: language,
  }),
  {} as Record<LanguageLocale, LanguageOption>,
);

const isLanguageLocale = (value: string): value is LanguageLocale => {
  return value in languageOptionsByLocale;
};

const getLanguageOption = (locale: LanguageLocale) => {
  return languageOptionsByLocale[locale];
};

const getNextLanguageLocale = (locale: LanguageLocale) => {
  const currentIndex = supportedLanguages.findIndex(
    (language) => language.locale === locale,
  );
  const nextIndex = (currentIndex + 1) % supportedLanguages.length;

  return supportedLanguages[nextIndex].locale;
};

export { getLanguageOption, getNextLanguageLocale, isLanguageLocale };
