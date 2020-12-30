"use strict";

var express = require('express');

var router = express.Router();

var gererateToken = require('./security/verify').generateToken;

var verifyToken = require('./security/verify').verifyToken; //const User = require('./models/User');


var Game = require('./models/Game');

var GameUser = require('./models/GameUser');
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post("/savegame", function _callee(req, res, next) {
  var _req$body, title, img, price, downloads, description, newGame;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, img = _req$body.img, price = _req$body.price, downloads = _req$body.downloads, description = _req$body.description;
          newGame = new Game({
            title: title,
            img: img,
            price: price,
            downloads: downloads,
            description: description
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(newGame.save());

        case 4:
          res.status(200).json({
            message: 'Successfully!!'
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/getgames", verifyToken, function _callee2(req, res, next) {
  var listgames;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Game.find());

        case 2:
          listgames = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: listgames
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post("/download", verifyToken, function _callee3(req, res, next) {
  var _req$body2, idUser, game, _id, title, img, price, downloads, description, existe, newGameUser, gamechange;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, idUser = _req$body2.idUser, game = _req$body2.game; //envia el title del juego y el email de quien lo descarga

          _id = game._id, title = game.title, img = game.img, price = game.price, downloads = game.downloads, description = game.description; //se guarda 

          _context3.next = 4;
          return regeneratorRuntime.awrap(GameUser.findOne({
            "idUser": idUser,
            "title": title
          }));

        case 4:
          existe = _context3.sent;
          newGameUser = new GameUser({
            idUser: idUser,
            title: title,
            img: img,
            price: price,
            downloads: downloads,
            description: description
          });
          console.log(existe);

          if (existe) {
            _context3.next = 10;
            break;
          }

          _context3.next = 10;
          return regeneratorRuntime.awrap(newGameUser.save());

        case 10:
          _context3.next = 12;
          return regeneratorRuntime.awrap(Game.findOne({
            "title": title
          }));

        case 12:
          gamechange = _context3.sent;
          gamechange.downloads = Number(gamechange.downloads) + 1; //await Game.save(gamechange);

          _context3.next = 16;
          return regeneratorRuntime.awrap(gamechange.save());

        case 16:
          res.status(200).json({
            message: 'Successfully!!'
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post("/getmigames", verifyToken, function _callee4(req, res, next) {
  var idUser, listgames;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          idUser = req.body.idUser; //obtiene los juegos de un determinado usuario

          _context4.next = 3;
          return regeneratorRuntime.awrap(GameUser.find({
            "idUser": idUser
          }));

        case 3:
          listgames = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            data: listgames
          }));

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;