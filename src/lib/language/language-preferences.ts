import { eq } from "drizzle-orm";

import { defaultLanguage, type LanguageLocale } from "@/constants/language";
import { appSettings } from "@/lib/db/schema";
import { db } from "@/lib/db/client";
import { isLanguageLocale } from "@/lib/language/language";

const appLanguageKey = "app-language";

const getStoredLanguagePreference = (key: string) => {
  const setting = db
    .select()
    .from(appSettings)
    .where(eq(appSettings.key, key))
    .get();

  return setting && isLanguageLocale(setting.value) ? setting.value : undefined;
};

const setStoredLanguagePreference = (key: string, language: LanguageLocale) => {
  db.insert(appSettings)
    .values({ key, value: language })
    .onConflictDoUpdate({
      target: appSettings.key,
      set: { value: language },
    })
    .run();
};

const getAppLanguagePreference = (): LanguageLocale => {
  return getStoredLanguagePreference(appLanguageKey) ?? defaultLanguage;
};

const setAppLanguagePreference = (language: LanguageLocale) => {
  setStoredLanguagePreference(appLanguageKey, language);
};

export { getAppLanguagePreference, setAppLanguagePreference };
