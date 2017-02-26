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
var db = firebase.database();

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});


/* REST APIS */
app.get("/loggedin", function(req, res) {
  res.send(true);
})

/*app.post("/firebasePostTest", function(req, res){
  var userId = "a99131327";
  db.ref('students/a99131327').set({
    name: 'Joe',
    team: 4
  });
  res.send(true);
})

app.get("/firebaseGetTest", function(req, res){
  var userId = "a99113372";
  var ref = db.ref("students/"+userId);
  ref.once("value").then(function(snapshot){
    var name = snapshot.child("name").val();
    console.log(name);
  })
  res.send(true);
})*/

