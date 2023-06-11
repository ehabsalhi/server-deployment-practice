const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();


app.use(cors())

app.get ("/bad" , (req,res,next) => {
     next({message : "test"})
})


app.get('/' ,date, (req , res) =>{
     res.status(200).json({
          message : 'Home Page',
          stamper : req.stamper
     })
})

function date (req, res , next){
     req.stamper = new Date()
     next()
}


const pageNotFound  = require('./middleware/404.js');
const serverError = require("./middleware/500.js")

app.use('*', pageNotFound)
app.use(serverError)


const port = process.env.PORT || 4000
app.listen(port , () => {
     console.log('working in Port ',port);
})