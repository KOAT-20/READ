const reasonControl = {};
const reasonModel = require('../models/reason.model.js');

reasonControl.getReasons = async (req, res) => {
  const requests = await reasonModel.find();
  res.json(requests);
}

reasonControl.getReason = async (req, res) => {
  const comunity = await reasonModel.findById(req.params.id);
  res.json (comunity);
}

reasonControl.createReason = async (req, res) => {
  try {
    const {
      type_slctd,  amount_slctd, description_slctd
    } = req.body;
    /* Comunity */
    const newComunity = new reasonModel({
      type_slctd,  amount_slctd, description_slctd
    })
    await newComunity.save();
    res.json({message: 'Razón creada exitosamente!'})
  } catch (error) {
    res.json({message: error})
  }
}

// reasonControl.updateRequest = async (req, res) => {
//   const { /* patametros */ } = req.body;
//   await reasonModel.findOneAndUpdate({_id: req.params.id}, {
//     /* patametros */
//   });
//   res.json({message: 'Solicitud actualizada exitosamente!'})
// }

reasonControl.deleteReason = async (req, res) => {
  const { _id } = req.body;
  await reasonModel.findOneAndDelete({_id: req.params.id}, {
    _id,
  });
  res.json({message: 'Razón eliminada!'})
}

module.exports = reasonControl;
