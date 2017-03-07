var express = require('express');
var firebase = require("firebase");
var bodyParser = require('body-parser');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAW9Wo8Ta_KkbOeWV6yOR6u6J6KSXY8eAE",
  authDowmain: "anonevalproj.firebaseapp.com",
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

app.post("/createAccount", function(req, res){
  console.log(req.body.email);
  console.log(req.body.password);
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .then(function(user){
    console.log("we here");
    res.send(true);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    res.send(errorMessage);
    // ...
  });
})

app.post("/signIn", function(req, res){
  console.log(req.body.email);
  console.log(req.body.password);
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
  .then(function(user){
    console.log("we here");
    res.send(true);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    res.send(errorMessage);
    // ...
  });
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
  var userId = "A99131372";
  var name = null;
  var ref = db.ref("instructor/classes/ENG100DA/students/"+userId);
  ref.once("value").then(function(snapshot){
    name = snapshot.child("firstName").val();
    console.log(name);
  })
  res.send(true);
})*/

