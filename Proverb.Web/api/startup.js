var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/startup',function(req, res, next) {

    var location = "http://localhost:3000/"

    res.json({
        "appName":"Proverb.Web",
        "appRoot":location,
        "inDebug":false,
        "remoteServiceRoot":location + "api/",
        "version":"1.0.5506.39475"
    });
});

module.exports = router;
