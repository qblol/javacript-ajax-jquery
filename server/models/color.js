var mongoose = require('mongoose')
var Schema = mongoose.Schema

var colorSchema = new Schema({
  arrOfColors: [String]
});

var Color = mongoose.model('Colors',colorSchema)

module.exports = Color
