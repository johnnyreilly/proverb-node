var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/startup',function(req, res, next) {

    var location = "//" + req.headers.host; // eg "//localhost:3000"
    var inDebug = (express().get('env') === 'development');

    res.json({
        appName: "Proverb.Web",
        appRoot: location + "/",
        inDebug: inDebug,
        remoteServiceRoot: location + req.baseUrl + "/",
        version: "1.0.5506.39475" // TODO: Do we want auto incrementing version number here or is that overkill?
    });
});

module.exports = router;
