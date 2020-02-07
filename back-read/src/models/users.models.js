const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema ({
  firstname: {type: String, required: true, trim: true},
  lastname: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true, unique: true},
  password: {type: String, required: true}
}, {timestamps: true});

userSchema.methods.encrypPass = (password) => {
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.desencrypPass = function (password) {
  bcrypt.compareSync(password, this.password);
};

module.exports = model('User', userSchema);
