const express = require("express");
const https = require("https");
// const bodyParser = require("body-parser");



const app = express();

app.use(express.static("Public"));

app.use(express.json());
app.use(express.urlencoded({extended: true }));



app.get("/", function (req, res){
    res.sendFile(__dirname + "/signup.html");
});



app.post("/", function(req, res){

    var firstName = req.body.Firstname;
    var lastName = req.body.Lastname;
    var email = req.body.Email;

    console.log(firstName, lastName, email);

});



app.listen(8889, function(){
    console.log("Server is running on port 8889");
});