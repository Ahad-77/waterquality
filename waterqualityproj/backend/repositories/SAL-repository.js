'use strict';

const mongoose = require('mongoose');
let SAL = require('../models/SAL.model');

exports.getSAL = async () => {
    const res = await SAL.find();
    return res;
}

exports.getLastSALValue = async () => {
    const res = await SAL.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var sal = new SAL();
    sal.value = data
    sal.date_received = new Date()
    await sal.save();
};