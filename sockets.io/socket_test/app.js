const express = require('express');
const app = express()
    .use(express.static('./src/css'))
    .use(express.static('./src/images'))
    .use(express.static('./src/js'))

const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 2000;


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/pages/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
	    io.emit('chat message', {msg: msg);
    });
});

http.listen(2000, () => console.log(`Example app listening on port ${port}!`))
// http.listen(process.env.PORT || 2000)