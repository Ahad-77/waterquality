'use strict';

const express = require('express');
const serialport = require('serialport')
const router = express.Router();
const pHcontroller = require('../controllers/pH-controller.js')
const DOcontroller = require('../controllers/DO-controller.js')
const ECcontroller = require('../controllers/EC-controller.js')
const TDScontroller = require('../controllers/TDS-controller.js')
const SALcontroller = require('../controllers/SAL-controller.js')
const GRAVcontroller = require('../controllers/GRAV-controller.js')


let value = ""

router.get('/getpHData', pHcontroller.getLastpHValue)
router.get('/getDOData', DOcontroller.getLastDOValue)
router.get('/getECData', ECcontroller.getLastECValue)
router.get('/getTDSData', TDScontroller.getLastTDSValue)
router.get('/getSALData', SALcontroller.getLastSALValue)
router.get('/getGRAVData', GRAVcontroller.getLastGRAVValue)

router.post('/insertpHData', pHcontroller.post)
router.post('/insertDOData', DOcontroller.post)
router.post('/insertECData', ECcontroller.post)
router.post('/insertTDSData', TDScontroller.post)
router.post('/insertSALData', SALcontroller.post)
router.post('/insertGRAVData', GRAVcontroller.post)



let SerialPort = serialport.SerialPort;

const Readline = require('@serialport/parser-readline');


let port = new serialport('/dev/cu.usbmodem143101', {
    baudRate: 9600
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));


parser.on('open', onOpen);
parser.on('data', onData);

function onData(data) {
    console.log(data.toString('utf8'));
    value = data.toString('utf8'); 

    if (value.includes("pH")){
        pHcontroller.insertData(takeOnlyNumValue(value,":"));//DO this for each controller 
    }

    else if (value.includes("DO")){
        DOcontroller.insertData(takeOnlyNumValue(value,":"));//DO this for each controller 
    }

    else if (value.includes("EC")){
        ECcontroller.insertData(takeOnlyNumValue(value,":"));//DO this for each controller
    }

    else if (value.includes("TDS")){
        TDScontroller.insertData(takeOnlyNumValue(value,":"));//DO this for each controller 
    }

    else if (value.includes("SAL")){
        SALcontroller.insertData(takeOnlyNumValue(value,":"));//DO this for each controller
    }

    else if (value.includes("GRAV")){
        GRAVcontroller.insertData(takeOnlyNumValue(value,":"));//DO this for each controller 
    }

    else {
        console.log("No captured data the serial monitor says:" + value);
    }
   
};

function onOpen() {
    console.log("serial port open");
}

function takeOnlyNumValue(str, char)
{
   return str.substring(str.indexOf(char) + 1);
}

module.exports = router