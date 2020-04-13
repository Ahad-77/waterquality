'use strict';

const mongoose = require('mongoose');
let EC = require('../models/EC.model');

exports.getEC = async () => {
    const res = await EC.find();
    return res;
}

exports.getLastECValue = async () => {
    const res = await EC.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var ec = new EC();
    ec.value = data
    ec.date_received = new Date()
    await ec.save();
};