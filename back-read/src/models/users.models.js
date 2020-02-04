const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  firstname: {type: String, required: true, trim: true},
  lastname: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true, unique: true},
  password: {type: String, required: true, trim: true}
}, {timestamps: true});

module.exports = model('User', userSchema);
