const router = require('express').Router();
let Violations = require('../models/violations.model');

router.route('/').get((req, res) => {
    Violations.find()
      .then(violations => res.json(violations))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const fine = req.body.fine;
 
    const newFine = new Violations({
        fine
    });
  
    newFine.save()
    .then(() => res.json('Fine added!'))
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
        const fine = req.body.fine;
          if( fine==0){
         
        const approved_status = req.body.approved_status='Rejected';
          }
        violations.save()
        .then(() => res.json('Fine Updated!'))
        .then(() => res.json('Violation has been approved!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;