const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const router = express.Router()
const axios = require('axios').default
const db = require('../models')
const passport = require('../config/ppConfig.js')

router.get('/foods', (req, res)=>{
  res.render('foods/foodIndex')
})

router.post('/foods', (req, res) => {
    db.log.create({
        // meal: DataTypes.STRING,
        // age: DataTypes.INTEGER,
        // foodID: DataTypes.STRING,
        // mood: DataTypes.STRING
        meal: req.body.name,
        age: req.body.age,
        foodID: req.params.id,
        mood: req.body.mood
    })
    .then(resPost => {
      console.log('created comment\n', resPost)
      res.redirect(`foods/foodIndex${req.params.id}`)
    })
    .catch(err => {
      res.status(404).render('/404')
    })
  })



module.exports = router