//including express
const { response } = require('express');
const express = require('express');
const { request } = require('http');
const { send } = require('process');

//function that represent express module
const app = express();

//for listening http request send to our server
//app.listen(3000);


//Handling request and response
//app.get("/",function(req,res){
//    console.log(request);
// });
//but here it does not send any respond thats why on server nothing is visible
app.get("/", function (req, res) {
    res.send("Hello");
});

//similarly we can add different roots like "/" home route
app.get("/contact", function (req, res) {
    res.send("Contact me at Khushi26jha@gmail.com")
});

app.get("/about", function (req, res) {

    res.send("Hi, I'm Khushi.")
});



//here server is not returning anything beacuse 
app.listen(3000, function () {
    console.log("server started on port 3000");
});

//host our sever locally using localhost : 3000 but it shows cannot get because server cannot connect to the browser


