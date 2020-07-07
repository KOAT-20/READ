const { Router } = require('express');
const router = Router();
const {
  getApplicants, createApplicant, getApplicant, deleteApplicant
} = require('../controllers/applicant.controllers.js');

router.route('/')
  .get(getApplicants)
  .post(createApplicant)

router.route('/:id')
  .get(getApplicant)
  .delete(deleteApplicant)

module.exports = router;
