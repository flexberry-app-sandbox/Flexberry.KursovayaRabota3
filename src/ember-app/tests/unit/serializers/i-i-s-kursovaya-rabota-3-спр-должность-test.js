import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-3-спр-должность', 'Unit | Serializer | i-i-s-kursovaya-rabota-3-спр-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-3-спр-должность',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-kursovaya-rabota-3-спр-дисциплина',
    'model:i-i-s-kursovaya-rabota-3-спр-должность',
    'model:i-i-s-kursovaya-rabota-3-спр-препод',
    'model:i-i-s-kursovaya-rabota-3-спр-студ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
