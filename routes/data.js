const express = require('express');
const data = require('../data/data');
const multer = require('multer');
const auth = require('../middlewear/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
    res.json(data);
});

module.exports = router;