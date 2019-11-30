var net = require('net');
var server = net.createServer((socket) => {
    socket.on('data', buffer => {
        // console.log(buffer, buffer.toString());
        const lessonid = buffer.readInt16BE();
    })
});

server.listen(4000);