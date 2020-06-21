const { Router } = require('express');
const router = Router();
// const {
//   getRequests, getRequest, createRequest, deleteRequest
// } = require('../controllers/requests.controllers.js');

router.route('/')
  // .get(getRequests)
  // .post(createRequest)

router.route('/:id')
  // .get(getRequest)
  // .delete(deleteRequest)

module.exports = router;
