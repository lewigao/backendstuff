const express = require('express');
const router = express.Router();

//sea police stuff
router.get('/', (req, res) => {
    res.send('getting police data!');
});

router.post('/', (req, res) => {
    res.send('creating police data!');
});

router.put('/', (req, res) => {
    res.send('updating police data!');
});

router.delete('/', (req, res) => {
    res.send('deleting police data!');
});

module.exports = router;