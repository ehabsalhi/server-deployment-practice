const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const pageNotFound  = require('./middleware/404.js');
const serverError = require("./middleware/500.js")
const port = process.env.PORT || 4000



app.use(cors())



app.get('/' ,date, (req , res) =>{
     console.log('home page 00000');
     res.status(200).json({
          message : 'Home Page',
          stamper : req.stamper
     })
})

function date (req, res , next){
     req.stamper = new Date()
     next()
}

app.get ("/bad" , (req,res,next) => {
     next({message : "test"})
})


app.use('*', pageNotFound)
app.use(serverError)

function runServer() {
     app.listen(port , () => {
          console.log('working in Port ',port);
     })
}

module.exports = {app , runServer};