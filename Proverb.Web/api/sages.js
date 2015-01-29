var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sages',function(req, res, next) {

    res.json({
        "sages":"hello",
        "john": 1
    });
});

module.exports = router;
