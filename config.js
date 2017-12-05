const config = require('./config/config.json');

if (!config.refreshMs || isNaN(config.refreshMs)) {
    config.refreshMs = 5000;
}
if (!config.port || isNaN(config.port)) {
    config.port = 8088;
}

module.exports = {
    refreshMs: config.refreshMs,
    port: config.port,
    log: config.log,
};
