var express = require('express');
var router = express.Router();
const gererateToken = require('./security/verify').generateToken;
const verifyToken = require('./security/verify').verifyToken;
//const User = require('./models/User');
const Game = require('./models/Game');
const GameUser = require('./models/GameUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/savegame",async function(req, res, next) {
    const { title, img, price, downloads,description } = req.body
    const newGame = new Game({ title, img, price, downloads,description  })
    await newGame.save()
    res.status(200).json({ message: 'Successfully!!' })
  
});

router.get("/getgames", verifyToken,async function(req, res, next) {
  const listgames = await Game.find()
  return res.status(200).json({  data: listgames })
});

router.post("/download", verifyToken,async function(req, res, next) {
    const { idUser,game } = req.body; //envia el title del juego y el email de quien lo descarga
    const { _id,title, img, price, downloads,description }=game;
    
    //se guarda 
    const existe=await GameUser.findOne({"idUser":idUser,"title":title})

    const newGameUser = new GameUser({ idUser,title, img, price, downloads,description})
    console.log(existe)
    
    if(!existe)
        await newGameUser.save();
    
    //se actualiza el dato downlads
    var gamechange=await Game.findOne({"title":title});
    gamechange.downloads=Number(gamechange.downloads)+1;
    //await Game.save(gamechange);
    await gamechange.save()

    res.status(200).json({ message: 'Successfully!!' })
});

router.post("/getmigames",verifyToken,async function(req, res, next) {
    const { idUser } = req.body; //obtiene los juegos de un determinado usuario

    const listgames = await GameUser.find({"idUser":idUser})
    return res.status(200).json({  data: listgames })
  
});


module.exports = router;
