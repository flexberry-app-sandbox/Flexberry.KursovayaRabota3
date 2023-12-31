import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрДисциплинаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-3-спр-дисциплина';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрДисциплинаMixin, Validations, {
});

defineProjections(Model);

export default Model;
