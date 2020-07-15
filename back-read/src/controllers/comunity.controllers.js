const comunityControl = {};
const comunityModel = require('../models/comunity.model.js');
const applicantModel = require('../models/applicant.model.js');

comunityControl.createComunity = async (req, res) => {
  try {
    const newComunity = new comunityModel(req.body); /* Crear comunidad para el solicitante */
    const applicant = await applicantModel.findById(req.params); /* Buscar solicitante para asignar comunidad */
    newComunity.applicant_id = applicant; /* Asignar al usuario como proveniente de la comunidad */
    await newComunity.save(); /* Guardar comunidad para el usuario */
    applicant.comunity_id.push(newComunity); /* Asignar comunidad dentro del array del solicitante */
    await applicant.save(); /* Guardar solicitante con su comunidad */
    res.send(newComunity);
    res.json({message: 'Comunidad creada exitosamente!'})
  } catch (error) {
    res.json({message: error})
  }
}

comunityControl.getComunity = async (req, res) => {
  const comunity = await comunityModel.findById(req.params.id);
  // const comunity = await comunityModel.findById(req.params).populate('Comunity');
  res.json (comunity);
}

comunityControl.getComunitys = async (req, res) => {
  const requests = await comunityModel.find();
  res.json(requests);
}

// comunityControl.updateRequest = async (req, res) => {
//   const { /* patametros */ } = req.body;
//   await comunityModel.findOneAndUpdate({_id: req.params.id}, {
//     /* patametros */
//   });
//   res.json({message: 'Solicitud actualizada exitosamente!'})
// }

comunityControl.deleteComunity = async (req, res) => {
  const { _id } = req.body;
  await comunityModel.findOneAndDelete({_id: req.params.id}, {
    _id,
  });
  res.json({message: 'Comunidad eliminada!'})
}

module.exports = comunityControl;
