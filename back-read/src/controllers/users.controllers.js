const userControl = {};
const userModel = require('../models/users.models.js');

userControl.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
}

userControl.getUser = async (req, res) => {
  const note = await userModel.findById(req.params.id);
  res.json (note)
}

userControl.createUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const newUser = new userModel({
    firstname,
    lastname,
    email,
    password,
  })
  await newUser.save();
  res.json({message: 'Usuario creado exitosamente!'})
}

userControl.updateUser = async (req, res) => {
  const { firstname, lastname } = req.body;
  await userModel.findOneAndUpdate({_id: req.params.id}, {
    firstname,
    lastname
  });
  res.json({message: 'Usuario actualizado exitosamente!'})
}

userControl.deleteUser = async (req, res) => {
  const { _id } = req.body;
  await userModel.findOneAndDelete({_id: req.params.id}, {
    _id,
  });
  res.json({message: 'Usuario eliminado!'})
}

module.exports = userControl;
