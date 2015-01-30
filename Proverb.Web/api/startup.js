var express = require('express');
var router = express.Router();
var packageJson = require('../package.json');

/* GET users listing. */
router.get('/startup',function(req, res, next) {

    var location = "//" + req.headers.host; // eg "//localhost:3000"
    var inDebug = (express().get('env') === 'development');

    res.json({
        appName: "Proverb.Web",
        appRoot: location + "/",
        inDebug: inDebug,
        remoteServiceRoot: location + req.baseUrl + "/",
        version: packageJson.version
    });
});

module.exports = router;
