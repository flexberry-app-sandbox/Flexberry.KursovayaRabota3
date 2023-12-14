import {
  defineNamespace,
  defineProjections,
  Model as СпрДисциплинаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-3-спр-дисциплина';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрДисциплинаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
