const requestsControl = {};
const requestsModel = require('../models/applicant.models.js');
const comunityModel = require('../models/comunity.models.js');
const reasonModel = require('../models/reason.models.js');

requestsControl.getRequests = async (req, res) => {
  const requests = await requestsModel.find();
  res.json(requests);
}

requestsControl.getRequest = async (req, res) => {
  const request = await requestsModel.findById({}, (error, req.params.id) => {
    comunityModel.populate(req.params.id, {path:'Comunity'}, (error, req.params.id) => {
      reasonModel.populate(req.params.id, {path:'Reason'}, (error, req.params.id) => {
        res.json (request);
      });
    });
  });
}

requestsControl.createRequest = async (req, res) => {
  const {
    name_slc, last_slc, dni_slc, age_slc, phone_slc, email_slc,
    name_comunity, state_comunity, mncp_comunity, parish_comunity, postal_c_comunity,
    type_slctd, amount_slctd, description_slctd
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
  const newComunity = new comunityModel({
     type_slctd, amount_slctd, description_slctd
  })
  await newComunity.save();
  res.json({message: 'Solicitud creada exitosamente!'});
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
