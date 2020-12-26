const jwt = require('jsonwebtoken')
const SECRETKEY = 'secretkey';

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request')
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token == 'null') {
        return res.status(401).send('Unauthorized Request')
    }

    const payload = jwt.verify(token, SECRETKEY)
    req.body.idUser = payload._id
    next()
}

function generateToken(data) {
    return jwt.sign({ _id: data.id }, SECRETKEY)
}

module.exports.verifyToken = verifyToken;
module.exports.generateToken = generateToken;