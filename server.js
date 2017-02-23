var express = require('express');
var firebase = require("firebase");

// Create express app
var app = express();
// Use the environment's port, 8080 ass the default port
var PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAW9Wo8Ta_KkbOeWV6yOR6u6J6KSXY8eAE",
  authDomain: "anonevalproj.firebaseapp.com",
  databaseURL: "https://anonevalproj.firebaseio.com",
  storageBucket: "anonevalproj.appspot.com",
  messagingSenderId: "40786831761"
};
firebase.initializeApp(config);

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});


/* REST APIS */
app.get("/loggedin", function(req, res) {
  res.send(true);
})
