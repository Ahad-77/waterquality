'use strict';

const mongoose = require('mongoose');
let pH = require('../models/pH.model');

exports.getpH = async () => {
    const res = await pH.find();
    return res;
}

exports.getLastpHValue = async () => {
    const res = await pH.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var ph = new pH();
    ph.value = data
    ph.date_received = new Date()
    await ph.save();
};