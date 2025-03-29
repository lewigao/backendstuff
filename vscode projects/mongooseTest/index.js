const mongoose = require('mongoose');

/*
//a schema determines how an object gets defined
const kittySchema = new mongoose.Schema({
    name: String
})

//adds a speak function to the kittySchema, it is an "instance method".
//every document (mongoDB record) created using the schema can use the "speak" function
//uisng this method will only use info from individual documents
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
};

//this is a model, a class for constructing documents 
const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({
    name: 'Silence'});

console.log(silence.name);

const lewi = new Kitten({
    name: 'Lewi'});
console.log(lewi.name);
lewi.speak();
silence.speak();
*/

const doggySchema = new mongoose.Schema({
    name: {type: String, default: 'pupper'},
    breed: String,
    age: Number,
})

doggySchema.methods.up = function jump() {
    console.log(this.name + " jumps up high!");
}

//'in quotes' is the name of our new collection of models/objects
//'doggy' is automatically pluralized, thank you mongoose
//the second argument defines the structure of documents we store in the collection
const Doggy = mongoose.model('doggy', doggySchema);

//default values are used if the field is omitted
const fluffy = new Doggy({
    breed: 'terrier',
    age: 2
})

console.log(fluffy.name);
fluffy.up();