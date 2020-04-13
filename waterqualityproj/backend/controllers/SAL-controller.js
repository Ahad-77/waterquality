'use strict'

const mongoose = require('mongoose');
let SAL = require('../models/SAL.model');

const repo = require('../repositories/SAL-repository');


exports.getSALData = async (req, res, next) => {

  try {
      var data = await repo.getSALData();
      res.status(200).send(data);
  } catch (e) {
      res.status(500).send({
          message: "failed to process your request."
      });
  }
};

exports.getLastSALValue = async (req, res, next) => {

  try {
      var data = await repo.getLastSALValue();
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

  var sal = new SAL(req.body);

  console.log(sal);

  repo
      .create(sal.value)
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