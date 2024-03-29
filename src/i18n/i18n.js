import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enTranslation } from './en-translation';
import { ukTranslation } from './uk-translation';

const resources = {
  en: { translation: enTranslation },
  uk: { translation: ukTranslation },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  });

export { i18next };
