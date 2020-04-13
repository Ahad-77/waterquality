'use strict';

const mongoose = require('mongoose');
let SensorsData = require('../models/sensorsData.model');

exports.getSensorData = async () => {
    const res = await SensorsData.find();
    return res;
}

exports.getLastSensorValue = async () => {
    const res = await SensorsData.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var sensorData = new SensorsData();
    sensorData.value = data
    sensorData.date_received = new Date()
    await sensorData.save();
};