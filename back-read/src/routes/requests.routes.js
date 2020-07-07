const { Router } = require('express');
const router = Router();
const {
  getRequests, createRequest, getRequest, deleteRequest, getComunity, getReason
} = require('../controllers/requests.controllers.js');

router.route('/')
  .get(getRequests)
  .post(createRequest)

router.route('/:id')
  .get(getRequest)
  .delete(deleteRequest)

router.route('/comunity')
  .get(getComunity)

  router.route('/reason')
    .get(getReason)

module.exports = router;
