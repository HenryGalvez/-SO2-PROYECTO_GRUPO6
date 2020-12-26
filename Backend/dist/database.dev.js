"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/angular-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Database is Connected');
})["catch"](function (err) {
  return console.log(err);
});