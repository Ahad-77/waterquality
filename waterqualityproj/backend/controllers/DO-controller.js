'use strict'

const mongoose = require('mongoose');
let DO = require('../models/DO.model');

const repo = require('../repositories/DO-repository');


exports.getDOData = async (req, res, next) => {

  try {
      var data = await repo.getDOData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastDOValue = async (req, res, next) => {

  try {
      var data = await repo.getLastDOValue();
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

  var dissolvedOxygen = new DO(req.body);

  console.log(dissolvedOxygen);

  repo
      .create(dissolvedOxygen.value)
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