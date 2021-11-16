var express = require('express');
var app = express();



/*
// Middleware
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware function route handler.
   next();
});

app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});



app.get('/', function(req, res){
   res.send("Hello world!");
});



// Routing
var things = require('./things.js');
app.use('/things', things);



// Dynamic routes.
app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});



// Pattern matched routes.
app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
*/



/*
//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   console.log('Middle');
   next();
});

app.use('/', function(req, res){
   console.log('End');
});
*/



app.use(express.static('public'));
//app.use(express.static('images'));



var movies = [
   {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
   {id: 102, name: "Inception", year: 2010, rating: 8.7},
   {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
   {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];

app.get('/movies', function(req, res){
   res.json(movies);
});

app.get('/movies/:id([0-9]{3,})', function(req, res){
   var currMovie = movies.filter(function(movie){
      if(movie.id == req.params.id){
         return true;
      }
   });
   if(currMovie.length == 1){
      res.json(currMovie[0])
   } else {
      res.status(404);//Set status to 404 as movie was not found
      res.json({message: "Not Found"});
   }
});

/*
test-project/
   node_modules/
   config/
      db.js                //Database connection and configuration
      credentials.js       //Passwords/API keys for external services used by your app
   models/                 //For mongoose schemas
      users.js
      things.js
   routes/                 //All routes for different entities in different files 
      users.js
      things.js
   app.js
   routes.js               //Require all routes in this and then require this file in app.js 
   package.json
*/



app.listen(3000);
