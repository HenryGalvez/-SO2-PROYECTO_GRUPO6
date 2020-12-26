"use strict";

var express = require('express');

var router = express.Router();

var verifyToken = require('./security/verify').verifyToken;

var Task = require('./models/Task');
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get("/tasks", verifyToken, function _callee(req, res, next) {
  var idUser, tasks;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          idUser = req.body.idUser;
          _context.next = 3;
          return regeneratorRuntime.awrap(Task.find({
            userId: idUser
          }));

        case 3:
          tasks = _context.sent;

          if (tasks) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(404).send({
            message: "Error to find yours Task.",
            data: []
          }));

        case 6:
          return _context.abrupt("return", res.status(200).json({
            message: "Successfully",
            data: tasks
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/insert-task", verifyToken, function _callee2(req, res, next) {
  var _req$body, title, description, dateEnd, idUser, newTask;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description, dateEnd = _req$body.dateEnd, idUser = _req$body.idUser;
          newTask = new Task({
            title: title,
            description: description,
            dateEnd: dateEnd,
            state: false,
            userId: idUser
          });
          _context2.next = 4;
          return regeneratorRuntime.awrap(newTask.save());

        case 4:
          res.status(200).json({
            message: 'Successfully!!'
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post("/delete-task", verifyToken, function _callee3(req, res, next) {
  var re;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Task.deleteOne({
            _id: req.body._id
          }));

        case 2:
          re = _context3.sent;

          if (!re || !re.n || re.n == 0) {
            res.status(500).json({
              message: 'Error in operation'
            });
          }

          res.status(200).json({
            message: 'Successfully!!'
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;