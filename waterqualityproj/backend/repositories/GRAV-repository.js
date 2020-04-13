'use strict';

const mongoose = require('mongoose');
let GRAV = require('../models/GRAV.model');

exports.getGRAV = async () => {
    const res = await GRAV.find();
    return res;
}

exports.getLastGRAVValue = async () => {
    const res = await GRAV.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var grav = new GRAV();
    grav.value = data
    grav.date_received = new Date()
    await grav.save();
};