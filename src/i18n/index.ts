import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import commonAr from "./common/ar.json";
import commonEn from "./common/en.json";
import commonEs from "./common/es.json";
import commonFr from "./common/fr.json";
import commonHi from "./common/hi.json";
import commonRu from "./common/ru.json";
import commonZh from "./common/zh.json";
import recipesAr from "./recipes/recipesAR.json";
import recipesEn from "./recipes/recipesEN.json";
import recipesEs from "./recipes/recipesES.json";
import recipesFr from "./recipes/recipesFR.json";
import recipesHi from "./recipes/recipesHI.json";
import recipesRu from "./recipes/recipesRU.json";
import recipesZh from "./recipes/recipesZH.json";

export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "ru", name: "Русский" },
  { code: "ar", name: "العربية" },
  { code: "hi", name: "हिन्दी" },
  { code: "es", name: "Español" },
  { code: "zh", name: "中文" },
];

const resources = {
  en: {
    common: commonEn,
    recipes: recipesEn,
  },
  fr: {
    common: commonFr,
    recipes: recipesFr,
  },
  ru: {
    common: commonRu,
    recipes: recipesRu,
  },
  ar: {
    common: commonAr,
    recipes: recipesAr,
  },
  hi: {
    common: commonHi,
    recipes: recipesHi,
  },
  es: {
    common: commonEs,
    recipes: recipesEs,
  },
  zh: {
    common: commonZh,
    recipes: recipesZh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  defaultNS: "common",
  react: {
    useSuspense: false,
    bindI18n: "languageChanged",
    bindI18nStore: "added removed",
    nsMode: "default",
  },
});

export default i18n;
