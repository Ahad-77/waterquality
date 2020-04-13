'use strict'

const mongoose = require('mongoose');
let SensorsData = require('../models/sensorsData.model');

const repo = require('../repositories/sensor-repository');


exports.getSensorData = async (req, res, next) => {

  try {
      var data = await repo.getSensorData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastSensorValue = async (req, res, next) => {

  try {
      var data = await repo.getLastSensorValue();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};



exports.insertData = (data) => {
  repo
      .create(data)
      .then(x => {
          console.log('Successfully sended!')
      })
      .catch(e => {
          console.log(e)
      });
}



exports.post = (req, res, next) => {

  var sensorData = new SensorsData(req.body);

  console.log(sensorData);

  repo
      .create(sensorData.value)
      .then(x => {
          res.status(201).send({
              message: 'Successfully sended!'
          });
      })
      .catch(e => {
          res.status(400).send({
              message: 'Failed to add !',
              data: e
          });
      });
};


