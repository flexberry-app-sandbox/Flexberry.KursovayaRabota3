import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_rabota_3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_rabota_3',
          title: 'Kursovaya_rabota_3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
