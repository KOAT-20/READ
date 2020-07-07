const { Router } = require('express');
const router = Router();
const {
  getReasons, createReason, getReason, deleteReason
} = require('../controllers/reason.controllers.js');

router.route('/')
  .get(getReasons)
  .post(createReason)

router.route('/:id')
  .get(getReason)
  .delete(deleteReason)

module.exports = router;
