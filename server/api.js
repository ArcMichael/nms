const express = require('express');
const router = express.Router();

require('es6-promise').polyfill();
import 'isomorphic-fetch';

router.get('/', function (req, res) {
    res.send('obligate api');
});

router.post('/', function (req, res) {
    res.send('obligate api');
});

// Not Match
router.get('/*', function (req, res) {
    res.status(404).send({
        "status": 1,
        "message": "API"
    });
});

router.post('/*', function (req, res) {
    res.status(404).send({
        "status": 1,
        "message": "API"
    });
});

module.exports = router;
// server