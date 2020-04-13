'use strict'

const mongoose = require('mongoose');
let TDS = require('../models/TDS.model');

const repo = require('../repositories/TDS-repository');


exports.getTDSData = async (req, res, next) => {

  try {
      var data = await repo.getTDSData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastTDSValue = async (req, res, next) => {

  try {
      var data = await repo.getLastTDSValue();
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

  var tds = new TDS(req.body);

  console.log(tds);

  repo
      .create(tds.value)
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