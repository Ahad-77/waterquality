const io = require('socket.io');
const router = require('express').Router();

let serialport = require('serialport');

const Readline = require('@serialport/parser-readline');


let port = new serialport('/dev/cu.usbmodem143101', {
    baudRate: 9600
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('open', onOpen);
parser.on('data', onData);

function onData(data) {
    io.emit("data",  data);// to send data as JSON each time the data is sended 
};

function onOpen() {
    console.log("serial port open");
}

router.get('/', (req, res, next) => {
    res.send('ads');
});

module.exports = router;