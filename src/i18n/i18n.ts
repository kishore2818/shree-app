// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON language files
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ta from "./locales/ta.json";
import te from "./locales/te.json";
import kn from "./locales/kn.json";
import ml from "./locales/ml.json";
import mr from "./locales/mr.json";
import gu from "./locales/gu.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    ta: { translation: ta },
    te: { translation: te },
    kn: { translation: kn },
    ml: { translation: ml },
    mr: { translation: mr },
    gu: { translation: gu },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
