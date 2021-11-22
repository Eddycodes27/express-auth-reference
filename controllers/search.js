const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const router = express.Router()
const axios = require('axios').default
const db = require('../models')
const passport = require('../config/ppConfig.js')
const nutritionix   = require("nutritionix-api")

router.get('/', (req, res) => {
    

        const YOUR_APP_ID   = '9bdd8170'
        const YOUR_API_KEY  = 'cee6225528ab2783b8c31886e650b46c'

        nutritionix.init(YOUR_APP_ID,YOUR_API_KEY)
        nutritionix.natural.search('banana').then(result => {
            let name = 'The' + ' ' + result.foods[0].food_name
            let quantity = 'with a quantity of' + ' ' + result.foods[0].serving_qty
            let calories = 'will have' + ' ' + result.foods[0].nf_calories + ' ' + 'calories,'
            let fat = ' ' + result.foods[0].nf_total_fat + ' ' + 'total fat,'
            let satFat = ' ' + result.foods[0].nf_saturated_fat + ' ' + 'saturated fats,'
            let cholesterol = ' ' + result.foods[0].nf_cholesterol + ' ' + 'cholesterol,'
            let sodium = ' ' + result.foods[0].nf_sodium + ' ' +  'miligrams of sodium,'
            let carbs = ' ' + result.foods[0].nf_total_carbohydrate + ' ' + 'carbs,'
            let fiber = ' ' + result.foods[0].nf_dietary_fiber + ' ' + 'grams of fiber,'
            let sugar = ' ' + result.foods[0].nf_sugars + ' ' + 'sugars,'
            let potassium = ' ' + result.foods[0].nf_potassium + ' ' + 'miligrams of potassium,'
            let protein = ' ' + 'and ' + result.foods[0].nf_protein + ' ' + 'grams of protein.'

            console.log(result)
            res.render('search', {result:name + ' ' + quantity + ' ' + calories + ' ' + fat + ' ' + satFat + ' ' + 
            cholesterol + ' ' + sodium + ' ' + carbs + ' ' + fiber + ' ' + sugar + ' ' + potassium + ' ' + protein})
    })
})

  module.exports = router
  