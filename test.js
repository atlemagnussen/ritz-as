const logger = require('./logger.js').getLogger("ritz");
logger.debug('Booting');

var path = require('path');
var express = require('express');

// static server
var port = 8088;
var app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'app')));
app.get('/', function(req, res) {
    res.sendfile(__dirname + './app/index.html');
});


router.get('/', function(req, res) {
    res.json({
        message: 'sweet jesus'
    });
});

app.use('/api', router);
app.listen(port);
logger.info("Listening on port: " + port);
