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
  apiKey: "AIzaSyBQ_4j_0ExPRXwowMtHsYlVn0F6UOCYBXQ",
  authDomain: "friendlychat-20331.firebaseapp.com",
  databaseURL: "https://friendlychat-20331.firebaseio.com",
  storageBucket: "friendlychat-20331.appspot.com",
  messagingSenderId: "781201579821"
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
