const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Testing stack exchange API');
});

module.exports = router;