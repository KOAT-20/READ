const { Router } = require('express');
const router = Router();
const {
  getComunitys, createComunity, getComunity, deleteComunity
} = require('../controllers/comunity.controllers.js');

router.route('/')
  .get(getComunitys)
  .post(createComunity)

router.route('/:id')
  .get(getComunity)
  .delete(deleteComunity)

module.exports = router;
