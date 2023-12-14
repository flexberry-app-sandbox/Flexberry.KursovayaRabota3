import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya_rabota_3СпрДисциплинаLForm from './forms/i-i-s-kursovaya-rabota-3-спр-дисциплина-l';
import IISKursovaya_rabota_3СпрДолжностьLForm from './forms/i-i-s-kursovaya-rabota-3-спр-должность-l';
import IISKursovaya_rabota_3СпрПреподLForm from './forms/i-i-s-kursovaya-rabota-3-спр-препод-l';
import IISKursovaya_rabota_3СпрСтудLForm from './forms/i-i-s-kursovaya-rabota-3-спр-студ-l';
import IISKursovaya_rabota_3СпрДисциплинаEForm from './forms/i-i-s-kursovaya-rabota-3-спр-дисциплина-e';
import IISKursovaya_rabota_3СпрДолжностьEForm from './forms/i-i-s-kursovaya-rabota-3-спр-должность-e';
import IISKursovaya_rabota_3СпрПреподEForm from './forms/i-i-s-kursovaya-rabota-3-спр-препод-e';
import IISKursovaya_rabota_3СпрСтудEForm from './forms/i-i-s-kursovaya-rabota-3-спр-студ-e';
import IISKursovaya_rabota_3СпрДисциплинаModel from './models/i-i-s-kursovaya-rabota-3-спр-дисциплина';
import IISKursovaya_rabota_3СпрДолжностьModel from './models/i-i-s-kursovaya-rabota-3-спр-должность';
import IISKursovaya_rabota_3СпрПреподModel from './models/i-i-s-kursovaya-rabota-3-спр-препод';
import IISKursovaya_rabota_3СпрСтудModel from './models/i-i-s-kursovaya-rabota-3-спр-студ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-3-спр-дисциплина': IISKursovaya_rabota_3СпрДисциплинаModel,
    'i-i-s-kursovaya-rabota-3-спр-должность': IISKursovaya_rabota_3СпрДолжностьModel,
    'i-i-s-kursovaya-rabota-3-спр-препод': IISKursovaya_rabota_3СпрПреподModel,
    'i-i-s-kursovaya-rabota-3-спр-студ': IISKursovaya_rabota_3СпрСтудModel
  },

  'application-name': 'Kursovaya_rabota_3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya_rabota_3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_rabota_3',
          title: 'Kursovaya_rabota_3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'интеграция-сайта-д-о-и-библиотеки': {
          caption: 'Интеграция Сайта ДО и Библиотеки',
          title: 'Интеграция Сайта ДО и Библиотеки',
          'i-i-s-kursovaya-rabota-3-спр-препод-l': {
            caption: 'Справочник преподаватели',
            title: ''
          },
          'i-i-s-kursovaya-rabota-3-спр-должность-l': {
            caption: 'Справочник должности',
            title: ''
          },
          'i-i-s-kursovaya-rabota-3-спр-дисциплина-l': {
            caption: 'Справочник дисциплина',
            title: ''
          },
          'i-i-s-kursovaya-rabota-3-спр-студ-l': {
            caption: 'Справочник студенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-3-спр-дисциплина-l': IISKursovaya_rabota_3СпрДисциплинаLForm,
    'i-i-s-kursovaya-rabota-3-спр-должность-l': IISKursovaya_rabota_3СпрДолжностьLForm,
    'i-i-s-kursovaya-rabota-3-спр-препод-l': IISKursovaya_rabota_3СпрПреподLForm,
    'i-i-s-kursovaya-rabota-3-спр-студ-l': IISKursovaya_rabota_3СпрСтудLForm,
    'i-i-s-kursovaya-rabota-3-спр-дисциплина-e': IISKursovaya_rabota_3СпрДисциплинаEForm,
    'i-i-s-kursovaya-rabota-3-спр-должность-e': IISKursovaya_rabota_3СпрДолжностьEForm,
    'i-i-s-kursovaya-rabota-3-спр-препод-e': IISKursovaya_rabota_3СпрПреподEForm,
    'i-i-s-kursovaya-rabota-3-спр-студ-e': IISKursovaya_rabota_3СпрСтудEForm
  },

});

export default translations;
