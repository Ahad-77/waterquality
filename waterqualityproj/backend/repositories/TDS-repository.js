'use strict';

const mongoose = require('mongoose');
let TDS = require('../models/TDS.model');

exports.getTDS = async () => {
    const res = await TDS.find();
    return res;
}

exports.getLastTDSValue = async () => {
    const res = await TDS.findOne({}).sort({ date_received: 'desc' })
    return res;
}

exports.create = async (data) => {
    var tds = new TDS();
    tds.value = data
    tds.date_received = new Date()
    await tds.save();
};