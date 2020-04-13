const router = require('express').Router();
let Industries = require('../models/Industries.model');


router.route('/').get((req, res) => {
    Industries.find()
      .then(industries => res.json(industries))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const industry_name = req.body.industry_name;
    const crn = req.body.crn;
    const irn = req.body.irn;
    const category = req.body.category;
  
    const newIndustry = new Industries({
        industry_name,
        crn,
        irn,
        category,
    });
  
    newIndustry.save()
    .then(() => res.json('Industry added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Industries.findById(req.params.id)
      .then(industries => res.json(industries))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Industries.findByIdAndDelete(req.params.id)
      .then(() => res.json('Industry deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Industries.findById(req.params.id)
      .then(industries => {
        industries.industry_name = req.body.industry_name;
        industries.crn = req.body.crn;
        industries.irn = req.body.irn;
        industries.category = req.body.category;
  
        industries.save()
          .then(() => res.json('Industry updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;