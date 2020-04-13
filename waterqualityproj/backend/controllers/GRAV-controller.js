'use strict'

const mongoose = require('mongoose');
let GRAV = require('../models/GRAV.model');

const repo = require('../repositories/GRAV-repository');


exports.getGRAVData = async (req, res, next) => {

  try {
      var data = await repo.getGRAVData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastGRAVValue = async (req, res, next) => {

  try {
      var data = await repo.getLastGRAVValue();
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

  var grav = new GRAV(req.body);

  console.log(grav);

  repo
      .create(grav.value)
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