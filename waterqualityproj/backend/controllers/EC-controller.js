'use strict'

const mongoose = require('mongoose');
let EC = require('../models/EC.model');

const repo = require('../repositories/EC-repository');


exports.getECData = async (req, res, next) => {

  try {
      var data = await repo.getECData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastECValue = async (req, res, next) => {

  try {
      var data = await repo.getLastECValue();
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

  var ec = new EC(req.body);

  console.log(ec);

  repo
      .create(ec.value)
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