const { Schema, model } = require('mongoose')

const gameuserSchema = new Schema({
    idUser: String,
    title: String,
    img: String,
    price: Number,
    downloads: Number,
    description: String
}, {
    timestamps: true
})

module.exports = model('GameUser', gameuserSchema)