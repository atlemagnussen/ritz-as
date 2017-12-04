const config = require('./config.js');
const logger = require('./logger.js').getLogger("test");
const WssMock = require('./wssMock.js');
logger.debug('Booting');

var path = require('path');
var express = require('express');
const Claymore = require('./miner/claymore.js');
const Ewbf = require('./miner/ewbf.js');

// static server
var port = 8088;
var app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'client')));
app.get('/', function(req, res) {
  res.sendfile(__dirname + './client/index.html');
});
const wss = new WssMock();
var rigObj = []
if (config.rigs) {
    for(var r in config.rigs) {
        if(config.rigs.hasOwnProperty(r)) {
            let rig = config.rigs[r];
            if (rig.miners && Array.isArray(rig.miners)) {
                for(var i=0; i<rig.miners.length; i++) {
                    var minerConf = rig.miners[i];
                    logger.info(`rig ${r}-${minerConf.no} ${minerConf.type}`);
                    if (minerConf.type === "claymore") {
                        var claymoreMiner = new Claymore(r, minerConf, wss);
                        rigObj.push(claymoreMiner);
                    } else if (minerConf.type === "ewbf") {
                        var ewbfMiner = new Ewbf(r, minerConf, wss);
                        rigObj.push(ewbfMiner);
                    }
                }
            }
        }
    }
}


router.get('/', function (req, res) {
    res.json({ message: 'no rigs!! Need some websocket here right' });
});

app.use('/api', router);
app.listen(port);
logger.info("Listening on port: " + port);
