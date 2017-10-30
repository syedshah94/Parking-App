const express = require('express'); //import express
const logger = require('morgan'); //import a logger
const path = require('path'); //import 'path' since we will be dealing with relative paths (I believe this comes with installing express)
const bodyParser = require('body-parser'); //we're going to use inputs on forms
const methodOverride = require('method-override'); //Allows us to override browser requests

//create the app
const app = express(); //create an express object, technically the name should be App but I prefer this for now

app.use(methodOverride('_method'));//method override
  //Note:'_method' is a sort of delimiter we will use to specificy an override

require('dotenv').config(); //use this to hide API key and run server

//config
app.use(logger('dev'));//Use the logger when we type 'dev' in the terminal
//Our package.json uses '"dev": "nodemon app.js"'
//This way we can run both nodemon and our logger simply by typing 'npm run dev'

app.use(bodyParser.json()); //parse info to a json
app.use(bodyParser.urlencoded({extended: false})); //<----Come back to comment this later
//static config (to handle static files)
app.use(express.static('public')); //Directory where our static files will live

//views config (to handle views):
//we will need to use 'npm install ejs' for this to work
app.set('views', path.join(__dirname,'views')); //The paths we use for our views will be our 'views' directory
app.set('view engine','ejs'); //Specify we will use ejs as our views engine

//config port
const port = process.env.PORT || 3000; //Which port to run server
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});

//What to do if we get a '/'
app.get('/', (req,res) => {
  res.render('index') //render our view to the index.ejs
  //NOTE: .render() here will know we mean index.ejs, so dont ask for index.ejs (you might have issues)
});


//route requires

//todo routes:
const parkingRoutes = require('./routes/parking-routes.js');
app.use('/parking', parkingRoutes); //use parkingRoutes to handle what to do with '/parking' in browser

//Exception for unexpected browser link:
app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});
//Using '*' is a wildcard which practically means 'expect anything', so if all the other
//things we expectations fail, send a 404 error


