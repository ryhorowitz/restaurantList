const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './../public/distro')));
app.use('/', router);

mongoose
  .connect('mongodb://127.0.0.1:27017/rList?directConnection=true&serverSelectionTimeoutMS=2000', { useNewUrlParser: true })
  .then(() => console.log('Hooked up to MONGO 127.0.0.1:27017/rList'))
  .then(() => app.listen(PORT, '127.0.0.1', (err) => {
    if (err) console.error('ERROR IN SERVER LISTEN', err);
    console.log(`Server listening at http://localhost:${PORT}`);
  }))
  .catch((err) => console.error('ERROR\n', err));

// app recieves a post req
// req.body should have 3 props of lat lng time
//
