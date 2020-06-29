const requestsControl = {};
const requestsModel = require('../models/applicant.model.js');
const comunityModel = require('../models/comunity.model.js');
const reasonModel = require('../models/reason.model.js');

requestsControl.getRequests = async (req, res) => {
  const requests = await requestsModel.find();
  res.json(requests);
}

requestsControl.getRequest = async (req, res) => {
  const request = await requestsModel.findById(req.params.id);
  res.json (request);
}

requestsControl.createRequest = async (req, res) => {
  try {
    const {
      name_slc, last_slc, dni_slc, age_slc, phone_slc, email_slc, /* Applicant */
      name_comunity, state_comunity, mncp_comunity, parish_comunity, postal_c_comunity, /* Comunity */
      type_slctd, amount_slctd, description_slctd /* Reason */
    } = req.body;
    /* Applicant */
    const newRequest = new requestsModel({
      name_slc, last_slc, dni_slc, age_slc, phone_slc, email_slc
    })
    await newRequest.save();
    /* Comunity */
    const newComunity = new comunityModel({
      name_comunity, state_comunity, mncp_comunity, parish_comunity, postal_c_comunity
    })
    await newComunity.save();
    /* Reason */
    const newReason = new reasonModel({
      type_slctd, amount_slctd, description_slctd
    })
    await newReason.save();
    res.json({message: 'Solicitud creada exitosamente!'})
  } catch (error) {
    res.json({message: error})
  }
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

module.exports = requestsControl;
