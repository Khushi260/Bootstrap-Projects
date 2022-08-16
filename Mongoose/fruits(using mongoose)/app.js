const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function () {
    console.log("we are connected!!!!!!!");
});

//creating a schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Why no name?"]
    },
    //rating: Number,

    //adding validation
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String

});

const Fruit = mongoose.model('fruit', fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "Peaches favourite"
});

//fruit.save();

//person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    //embedding a fruit documnet
    favouriteFruit: fruitSchema

});

const Person = mongoose.model('Person', personSchema);
const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great!"
});

//pineapple.save();

//here pineapple has a relation with amy in person while it is also in fruit collection

//const person = new Person({
    //name: "Amy",
    //age: 37,
    //gender: "Female",
    //favouriteFruit: pineapple
//});



const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The BEST!"
});
const orange = new Fruit({
    name: "Orange",
    rating: 9,
    review: "Too sour!"
});
const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Energy!"
});

//Fruit.insertMany([kiwi,orange,banana], function(err){
//if(err){
//console.log(err);
//}
//else{
//console.log("Succesfully saved all the fruits to fruitsDB");
//}
//});


// accessing data through mongoose

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);

    } else {
        //console.log(fruits);

        //closing connection
        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

//updating data
//Fruit.updateOne({review: "Peaches favourite"},{name: "Peach"}, function(err){
    //if(err){
        //console.log(err);
   // }
    //else{
   //console.log("Successfully updated the document.");
  //  }
//});

//deleting data
//Fruit.deleteOne({name: "Peach"},function(err){
    //if(err){
      //  console.log(err);
    //}
    //else{
      //  console.log("Deleted!");
    //}
//});

//Person.deleteOne({name: "John"},function(err){
    //if(err){
        //console.log(err);
    //}
    //else{
      //  console.log("Deleted!");
    //}
//});

//creating relationship
const strawberry = new Fruit({
    name: "Strawberry",
    score: 9,
    review: "Sweet & Sour!"
});

strawberry.save();

Person.updateOne({name: "John"},{favouriteFruit: strawberry}, function(err){
    if(err){
        console.log(err);
    }
    else{
   console.log("Successfully updated the document.");
   }
});




