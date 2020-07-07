const applicantControl = {};
const applicantModel = require('../models/applicant.model.js');

applicantControl.getApplicants = async (req, res) => {
  const requests = await applicantModel.find();
  res.json(requests);
}

applicantControl.getApplicant = async (req, res) => {
  const request = await applicantModel.findById(req.params.id);
  res.json (request);
}

applicantControl.createApplicant = async (req, res) => {
  try {
    const {
      name_slc, last_slc, dni_slc, age_slc, phone_slc, email_slc,
    } = req.body;
    /* Applicant */
    const newRequest = new applicantModel({
      name_slc, last_slc, dni_slc, age_slc, phone_slc, email_slc
    })
    await newRequest.save();
    res.json({message: 'Solicitante registrado!'})
  } catch (error) {
    res.json({message: error})
  }
}

// applicantControl.updateRequest = async (req, res) => {
//   const { /* patametros */ } = req.body;
//   await applicantModel.findOneAndUpdate({_id: req.params.id}, {
//     /* patametros */
//   });
//   res.json({message: 'Solicitud actualizada exitosamente!'})
// }

applicantControl.deleteApplicant = async (req, res) => {
  const { _id } = req.body;
  await applicantModel.findOneAndDelete({_id: req.params.id}, {
    _id,
  });
  res.json({message: 'Solicitud eliminada!'})
}

module.exports = applicantControl;
