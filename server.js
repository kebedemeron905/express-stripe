
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublictKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublictKey)

const express = require ('express')
const app = express ()
const fs = require ('fs')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/store', function (req, res) {


})

app.listen(3000)

