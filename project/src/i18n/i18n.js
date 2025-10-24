import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from './locales/en.json';
import ta from './locales/ta.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';
import te from './locales/te.json';
import kn from './locales/kn.json';
import ml from './locales/ml.json';
import gu from './locales/gu.json';

const resources = {
  en: { translation: en },
  ta: { translation: ta },
  hi: { translation: hi },
  mr: { translation: mr },
  te: { translation: te },
  kn: { translation: kn },
  ml: { translation: ml },
  gu: { translation: gu },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
