const path = require('path');
const express = require('express');
const http = require('http');
const dirname = process.cwd();

console.log(`dirname=${dirname}`);

var port = process.argv[2] || 3000;
var webFolder = path.join(dirname, 'app');
var indexPath = path.join(webFolder, 'index.html');

const app = express();
app.use(express.static(webFolder));
app.get('*', (req, res) => {
    console.log(`default for ${req.url}, sent to ${indexPath}`);
    res.sendFile(indexPath);
});

const server = http.createServer(app);

server.listen(port, function listening() {
    console.log('Listening on %d', server.address().port);
});
