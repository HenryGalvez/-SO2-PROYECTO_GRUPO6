var express = require('express');
var router = express.Router();
const gererateToken = require('./security/verify').generateToken;
const verifyToken = require('./security/verify').verifyToken;
//const User = require('./models/User');
const Game = require('./models/Game');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/savegame",async function(req, res, next) {
    const { title, img, price, downloads,description } = req.body
    const newGame = new Game({ title, img, price, downloads,description  })
    await newGame.save()
    const token = gererateToken(newGame);
    res.status(200).json({ token: token, message: 'Successfully!!' })
  
});

router.get("/getgames", verifyToken,async function(req, res, next) {
  const listgames = await Game.find()
  return res.status(200).json({  data: listgames })
});

router.post("/download",async function(req, res, next) {
    const { title, email } = req.body //envia el title del juego y el emal de quien lo descarga

    /*const newGame = new Game({ title, img, price, downloads,description  })
    await newGame.save()
    const token = gererateToken(newGame);
    res.status(200).json({ token: token, message: 'Successfully!!' })*/
  
});

router.post("/getmigames",async function(req, res, next) {
    const { email } = req.body //obtiene los juegos de un determinado usuario

    /*const newGame = new Game({ title, img, price, downloads,description  })
    await newGame.save()
    const token = gererateToken(newGame);
    res.status(200).json({ token: token, message: 'Successfully!!' })*/
  
});


module.exports = router;
