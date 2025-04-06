const express = require('express');
//this Router object will serve all the routes that we need
const router = express.Router();

//we can use the same "route" and specify what happens for each HTTP request

//pirate stuff, reached at "https://localhost:3000/pirates/"
//get() will retrieve data from the server
router.get('/', (req, res) => {
    res.send('getting pirate data!'); 
});

//whereas, post() will send data to the server
router.post('/', (req, res) => {
    res.send('creating pirate data!');
});

//put() updates data on the server
router.put('/', (req, res) => {
    res.send('updating pirate data!');
});

//while delete, well you know... deletes data from the server
router.delete('/', (req, res) => {
    res.send('deleting pirate data!');
});

//this is a different route, it will just be reached at "https://localhost:3000/pirates/treasure"
router.get('/treasure', (req, res) => {
    //we can also send json objects to the client, useful for API creation/usage
    res.json('coordinates: [27.321986, 49.123879]');
});



//this exports our router for use in other files
module.exports = router;