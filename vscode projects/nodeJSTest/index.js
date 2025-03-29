//following this tutorial: https://youtu.be/ENrzD9HAZK4?si=AE23t4FX9sGp3WBp
console.log(global.luckyNum);
global.luckyNum = '24';
console.log(global.luckyNum);

console.log(process.platform);
console.log(process.env.USER);

process.on('exit', function() {

    //do something

});

//EventEmitters are good for CPU intensive tasks (?)
    //e.g math, searching, data syncing, import/export, hashing, locations, etc

//EventEmitter creation
// require() IMPORTS a module
const { EventEmitter } = require('events'); 
//creation of EventEmitter object 
const eventEmitter = new EventEmitter();

//when this event is triggered, do the specified actions
//event transmitter ON event DO action
eventEmitter.on('lunch', () => {
    console.log('eat, fatty.');
})

//triggers the 'lunch' actions
eventEmitter.emit('lunch');
//the 'dinner' event emits the signal, but no actions get triggered
eventEmitter.emit('dinner');


//READING FILES
//promises are async and nonblocking
const { readFile } = require('fs').promises;

//for newer versions of node, 14.3 onward
const file = await readFile('./hello.txt', 'utf8');


async function hello(){
    const file2 = await readFile('./hello.txt', 'utf8');
}

//functions that end in "-sync" is BLOCKING
const { readFile1, readFileSync1 } = require('fs'); //this wasn't working because ReadFile1 and ReadFileSync1 does not exist in the "fs" module

const txt = readFileSync1('./hello.txt', 'utf8');
console.log(txt);
//this one gets blocked, because ReadFileSync is blocking
console.log("try and do this first");

//with ReadFile, third argument is a callback function
    //in this instance, callback function gets triggered if the operation fails
    //otherwise, it reads the text in the file
    //HOWEVER, because the callback function is itself, it just loops
const txt2 = readFile1('./hello.txt', 'utf8', (err, txt2) => {
    console.log(txt2);
});
//this one logs first, because ReadFile is non-blocking
console.log("try and do this first");

/*

//can also do this with ".promise" v
const { readFile } = require('fs');
const myModule = require('./my-module');
const express = require('express');
const app = express();

// '/' is the URL
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order');
        }

        response.send(html);
    })
});

//express app listens for requests
app.listen(process.env.PORT || 3000, () => console.log('App available on https://localhost:3000'));
*/