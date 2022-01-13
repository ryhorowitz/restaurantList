const mongoose = require('mongoose');
const seeder = require('mongoose-seed');
const User = require('../models/user');

const db = 'mongodb://127.0.0.1:27017/rList?directConnection=true&serverSelectionTimeoutMS=2000';

const data = [
  {
    'model': 'user',
    'documents': [
      {
        'username': 'ryWitz',
        'password': 'poopDollar',
        'signedUp': 'Wed Jan 12 2022 21:33:40 GMT-0500 (Eastern Standard Time)',
      },
      {
        'username': 'Bigred',
        'password': 'dumDollar',
        'signedUp': 'Wed Jan 12 2022 20:23:40 GMT-0500 (Eastern Standard Time)',
      },
    ],
  }];

seeder.connect(db, () => {
  seeder.loadModels(['../models/user']);
  seeder.clearModels('user', () => {
    seeder.populateModels(data, (err, done) => {
      if (err) { console.log('SEED ERROR', err); }
      if (done) { console.log('SEED DONE', done); }
      seeder.disconnect();
    });
  });
});
