var ws = require("nodejs-websocket")

const SOCKET_PORT = 3000;
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("close", function (code, reason) {
        console.log("Connection closed on SERVER")
    })

    conn.on('text', (msg) => {
        if(msg.includes('annotations-get')) {
            conn.send(JSON.stringify([
                {
                    id: Math.random(),
                    left: Math.random() * 200,
                    top: Math.random() * 200,
                    label: 'MyLabel from socket'
                },
                {
                    id: Math.random(),
                    left: Math.random() * 200,
                    top: Math.random() * 200,
                    label: 'MyLabel from socket'
                },
                {
                    id: Math.random(),
                    left: Math.random() * 200,
                    top: Math.random() * 200,
                    label: 'MyLabel from socket'
                },
            ]))
            console.log('sent data ')
        }
    })
}).listen(SOCKET_PORT)