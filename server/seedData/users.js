const mongoose = require('mongoose');
const User = require('../models/user');

mongoose
  .connect(
    'mongodb://127.0.0.1:27017/rList?directConnection=true&serverSelectionTimeoutMS=2000',
    { useNewUrlParser: true },
  )
  .then(() => console.log('Hooked up to MONGO 127.0.0.1:27017/rList'))
  .catch((err) => console.error('ERROR\n', err));

const users = [
  new User({
    username: 'ryWitz',
    password: 'poopDollar',
    signedUp: 'Wed Jan 12 2022 21: 33: 40 GMT-0500 (Eastern Standard Time)',
  }),
  new User({
    username: 'Bigred',
    password: 'dumDollar',
    signedUp: 'Wed Jan 12 2022 20: 23: 40 GMT-0500 (Eastern Standard Time)',
  }),
];

function exit() {
  mongoose.disconnect();
}

let done = 0;
// eslint-disable-next-line no-plusplus
for (let i = 0; i < users.length; i++) {
  users[i].save((err, result) => {
    done += 1;
    if (err) { console.error('ERROR', err); }
    if (done === users.length) {
      exit();
    }
  });
}
