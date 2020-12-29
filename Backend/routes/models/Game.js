const { Schema, model } = require('mongoose')

const gameSchema = new Schema({
    title: String,
    img: String,
    price: Number,
    downloads: Number,
    description: String
}, {
    timestamps: true
})

module.exports = model('Game', gameSchema)