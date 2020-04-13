'use strict';

const mongoose = require('mongoose');
let DO = require('../models/DO.model');

exports.getDO = async () => {
    const res = await DO.find();
    return res;
}

exports.getLastDOValue = async () => {
    const res = await DO.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var dissolvedOxygen = new DO();
    dissolvedOxygen.value = data
    dissolvedOxygen.date_received = new Date()
    await dissolvedOxygen.save();
};