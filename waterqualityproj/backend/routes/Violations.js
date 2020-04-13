const router = require('express').Router();
let Violations = require('../models/violations.model');

router.route('/').get((req, res) => {
    Violations.find()
      .then(violations => res.json(violations))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const fine = req.body.fine;
    const approved_status = req.body.approved_status;
    const name_of_industry_visited = req.body.name_of_industry_visited;

 
    const newViolation = new Violations({
        fine,
        approved_status,
        name_of_industry_visited
    });
  
    newViolation.save()
    .then(() => res.json('Violation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Violations.findById(req.params.id)
      .then(violations => res.json(violations))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Violations.findByIdAndDelete(req.params.id)
      .then(() => res.json('Violations deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Violations.findById(req.params.id)
      .then(violations => {
        violations.fine = req.body.fine;

        violations.save()
        .then(() => res.json('Fine Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;