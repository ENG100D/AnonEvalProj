var express = require('express');
var firebase = require("firebase");
var bodyParser = require('body-parser');
var gapi = require('googleapis');
var async = require("async");


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

//PID sign in for students
app.post("/pidSignIN", function(req, res){

  console.log(req.body.pid);
  var studentRef = db.ref("students/");
  var found = false;

  //Use list of teams to get list of students
          
  studentRef.once("value").then(function(snapshot){
    var obj = snapshot.val();

    //Loop over list of students and check pids
    Object.keys(obj).forEach(function(pid){
      console.log("current pid: " + pid);
      console.log("pid needed: " + req.body.pid);
      console.log((pid == req.body.pid))
      if(pid == req.body.pid)
      {
        found = true;

      }
    });
    res.send(found);
  })
            

})

//Email and password sign in for professor
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


//function to pull all of the data from under the instructor
app.get("/getInstructorData", function(req, res){
  var ref = db.ref("instructor");
  ref.once("value").then(function(snapshot){
    console.log(snapshot.val());
    res.send(snapshot.val());
  })
})

// function to return team members
// Expects teamNumber and classNumber as query parameter
app.post("/getTeamData", function(req, res){
  var teamNumber = req.body.teamNumber;
  var classNumber = req.body.classNumber;
  console.log(teamNumber);
  console.log(classNumber);
  var ref = db.ref("instructor/"+classNumber+"/"+teamNumber);
  ref.once("value").then(function(snapshot){
    res.send(snapshot.val());
  })
})

// function to return an array of classes
app.get("/getListOfClasses", function(req, res){
  var ref = db.ref("instructor/");
  var retObj = [];
  ref.once("value").then(function(snapshot){
    var obj = snapshot.val();
    Object.keys(obj).forEach(function(k) {
      retObj.push(k);
    });
    res.json(retObj);
  })
})

// function to return an array of teams in classes
// expects classNumber as query parameter
app.post("/getListOfTeams", function(req, res){
  var classNumber = req.body.classNumber;
  var ref = db.ref("instructor/"+classNumber);
  var retObj = [];
  ref.once("value").then(function(snapshot){
    var obj = snapshot.val();
    Object.keys(obj).forEach(function(k) {
      retObj.push(k);
    });
    res.json(retObj);
  })
})

//function where given an API an overall average from peer reviews is returned
//Expects PID, Class Number and Team Number
app.post("/cumulativeAverage", function(req, res){
  var pid = req.body.pid;
  var classNum = req.body.classNum;
  var teamNum = req.body.teamNum;

  var total = 0;
  var numReviews = 0;
  var avg = 0;

  var ref = db.ref("instructor/"+classNum+"/"+teamNum+"/"+pid+"/peer_reviews");
  ref.once("value").then(function(snapshot){
    var obj = snapshot.val();
    console.log(obj);
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        total += obj[key]["average"];
        numReviews++;
        console.log(key + " -> " + obj[key]["average"]);
      }
    }
    avg = total / numReviews;
    res.json(avg);
  })
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
