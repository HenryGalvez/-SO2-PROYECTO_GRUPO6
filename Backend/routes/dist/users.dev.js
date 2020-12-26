"use strict";

var express = require('express');

var router = express.Router();

var gererateToken = require('./security/verify').generateToken;

var verifyToken = require('./security/verify').verifyToken;

var User = require('./models/User');
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post("/signup", function _callee(req, res, next) {
  var _req$body, email, password, name, username, newUser, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, username = _req$body.username; //bcrypt.hash(password, 10, async (error, hash) => {
          //if (error) {
          //    res.status(500).json({ message: 'Erro to create user' })
          //}
          //const newUser = new User({ email, password: hash, name, username })

          newUser = new User({
            email: email,
            password: password,
            name: name,
            username: username
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(newUser.save());

        case 4:
          token = gererateToken(newUser);
          res.status(200).json({
            token: token,
            message: 'Successfully!!'
          }); //});

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/signin", function _callee2(req, res, next) {
  var _req$body2, email, password, user, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).send({
            message: "this email does not exists"
          }));

        case 6:
          if (user.password != password) res.status(401).send({
            message: 'Wrong password'
          });
          token = gererateToken(user);
          return _context2.abrupt("return", res.status(200).json({
            token: token,
            message: "Successfully!!"
          }));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get("/info", verifyToken, function _callee3(req, res, next) {
  var idUser, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          idUser = req.body.idUser;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: idUser
          }));

        case 3:
          user = _context3.sent;

          if (user) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(400).send({
            message: "this user does not exists"
          }));

        case 6:
          delete user._id;
          console.log(user);
          user.password = '';
          return _context3.abrupt("return", res.status(200).json({
            message: "Successfully!!",
            data: user
          }));

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;