const express = require('express');
const Color = require('../models/color');


module.exports = {
  getRandomColor: function(req,res){
    Color.find().then(function(data){
      function randomNumbers() {
        return Math.floor(Math.random()*data[0].arrOfColors.length)
      }
      res.json(data[0].arrOfColors[randomNumbers()]);
    })
  }
}
