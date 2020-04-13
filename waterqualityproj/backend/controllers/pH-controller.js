'use strict'

const mongoose = require('mongoose');
let pH = require('../models/pH.model');

const repo = require('../repositories/pH-repository');



exports.getpHData = async (req, res, next) => {

  try {
      var data = await repo.getpHData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastpHValue = async (req, res, next) => {

  try {
      var data = await repo.getLastpHValue();
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

  var ph = new pH(req.body);

  console.log(ph);

  repo
      .create(ph.value)
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


