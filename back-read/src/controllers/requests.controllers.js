const requestsControl = {};
const requestsModel = require('../models/applicant.models.js');
// const comunityModel = require('../models/comunity.models.js');
// const reasonModel = require('../models/reason.models.js');

requestsControl.getRequests = async (req, res) => {
  const requests = await requestsModel.find();
  res.json(requests);
}

requestsControl.getRequest = async (req, res) => {
  const request = await requestsModel.findById(req.params.id);
  res.json (request);
}

requestsControl.createRequest = async (req, res) => {
  const { name_slc, last_slc, dni_slc, age_slc, phone_slc, email_slc } = req.body;
  const newRequest = new requestsModel({
    firstname,
    lastname,
    email,
    password,
  })
  await newRequest.save();
  res.json({message: 'Solicitud creada exitosamente!'})
}

// requestsControl.updateRequest = async (req, res) => {
//   const { /* patametros */ } = req.body;
//   await requestsModel.findOneAndUpdate({_id: req.params.id}, {
//     /* patametros */
//   });
//   res.json({message: 'Solicitud actualizada exitosamente!'})
// }

requestsControl.deleteRequest = async (req, res) => {
  const { _id } = req.body;
  await requestsModel.findOneAndDelete({_id: req.params.id}, {
    _id,
  });
  res.json({message: 'Solicitud eliminada!'})
}

module.exports = userControl;
