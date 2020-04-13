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
    const industry_status = req.body.industry_status;
    const location = req.body.location;
    const status = req.body.status;
    const no_violations = req.body.no_violations;
    

  
    const newIndustry = new Industries({
        industry_name,
        crn,
        irn,
        category,
        industry_status,
        location,
        status,
        no_violations,
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
        industries.category = Number(req.body.category);
        industries.industry_status = req.body.industry_status;
        industries.location = req.body.location;
        industries.status = req.body.status;
        industries.no_violations = Number(req.body.no_violations);

  
        industries.save()
          .then(() => res.json('Industry updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;