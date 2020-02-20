var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

var port = process.env.PORT || 4113

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })
})

http.listen(port, () => {
    console.log('listening on port ' + port)
})