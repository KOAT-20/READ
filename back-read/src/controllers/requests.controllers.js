const requestsControl = {};
const requestsModel = require('../models/applicant.models.js');

requestsControl.getRequests = async (req, res) => {
  const requests = await requestsModel.find();
  res.json(requests);
}
