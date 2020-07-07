const comunityControl = {};
const comunityModel = require('../models/comunity.model.js');

comunityControl.getComunitys = async (req, res) => {
  const requests = await comunityModel.find();
  res.json(requests);
}

comunityControl.getComunity = async (req, res) => {
  const comunity = await comunityModel.findById(req.params.id);
  res.json (comunity);
}

comunityControl.createComunity = async (req, res) => {
  try {
    const {
      name_comunity, state_comunity, mncp_comunity, parish_comunity, postal_c_comunity, /* Comunity */
    } = req.body;
    /* Comunity */
    const newComunity = new comunityModel({
      name_comunity, state_comunity, mncp_comunity, parish_comunity, postal_c_comunity
    })
    await newComunity.save();
    res.json({message: 'Comunidad creada exitosamente!'})
  } catch (error) {
    res.json({message: error})
  }
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
