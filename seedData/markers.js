const mongoose = require('mongoose');
const Marker = require('../server/models/marker');

mongoose
    .connect('mongodb://127.0.0.1:27017/rList?directConnection=true&serverSelectionTimeoutMS=2000', { useNewUrlParser: true })
    .then(() => console.log('Hooked up to MONGO 127.0.0.1:27017/rList'))
    .catch((err) => console.error('ERROR\n', err));

const markers = [
    new Marker({
        lat: 39.944681655414406,
        lng: -75.17473797467065,
        timePlaced: '2022-01-14T02:58:55.159Z',
    }),
    new Marker({
        lat: 39.955077795992054,
        lng: -75.17078976300073,
        timePlaced: '2022-01-14T02:58:56.446Z',
    }),
    new Marker({
        lat: 39.94099656812241,
        lng: -75.1709106604187,
        timePlaced: '2022-01-14T03:09:46.540Z',
    }),
];

function exit() {
    mongoose.disconnect();
}

let done = 0;
// eslint-disable-next-line no-plusplus
for (let i = 0; i < markers.length; i++) {
    markers[i].save((err, result) => {
        done += 1;
        if (err) { console.error('ERROR', err); }
        if (done === markers.length) {
            exit();
        }
    });
}