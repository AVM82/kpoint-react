import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      projects: 'Projects',
      about_us: 'About us',
      log_in: 'Log in',
      sign_in: 'Sign in',
      search_field: 'Search field',
      share_button: 'Share',
      learn_more_button: 'Learn more',
      footer_sign: 'All rights reserved',
      statuses: {
        NEW: 'New',
        GATHERING_FOR_START: 'Gathering for start',
        EARNING: 'Earning',
        SUSPENDED: 'Suspended',
        FAILED: 'Failed',
        SUCCESSFUL: 'Successful',
      },
      buttons: {
        subscribe: 'Subscribe',
        donate: 'Donate',
        support: 'Support',
        location: 'Location',
      },
      owner: 'Owner',
      description: 'Description',
    },
  },
  uk: {
    translation: {
      projects: 'Проекти',
      about_us: 'Про нас',
      log_in: 'Увійти',
      sign_in: 'Приєднатись',
      search_field: 'Пошук',
      share_button: 'Поділитися',
      learn_more_button: 'Дізнатися більше',
      footer_sign: 'Всі права захищені',
      statuses: {
        NEW: 'Новий',
        GATHERING_FOR_START: 'Збирає на старт',
        EARNING: 'Заробляє',
        SUSPENDED: 'Призупинений',
        FAILED: 'Провалений',
        SUCCESSFUL: 'Успішний',
      },
      buttons: {
        subscribe: 'Підписатися',
        donate: 'Зробити внесок',
        support: 'Підтримати',
        location: 'Місцезнаходження',
      },
      owner: 'Власник',
      description: 'Опис',
    },
  },
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
