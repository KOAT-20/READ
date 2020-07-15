const { Router } = require('express');
const router = Router();
const {
  getComunitys, createComunity, getComunity, deleteComunity
} = require('../controllers/comunity.controllers.js');

router.route('/')
  .get(getComunitys)

router.route('/:id')
  .post(createComunity)
  .get(getComunity)
  .delete(deleteComunity)

module.exports = router;
