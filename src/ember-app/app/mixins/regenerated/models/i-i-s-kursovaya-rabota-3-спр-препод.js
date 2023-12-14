import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string')
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-3-спр-препод.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрПреподE', 'i-i-s-kursovaya-rabota-3-спр-препод', {
    фио: attr('Фио преподавателя', { index: 0 })
  });

  modelClass.defineProjection('СпрПреподL', 'i-i-s-kursovaya-rabota-3-спр-препод', {
    фио: attr('Фио преподавателя', { index: 0 })
  });
};
