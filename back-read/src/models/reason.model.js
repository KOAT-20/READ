'use strict'
const { Schema, model } = require('mongoose');

const reasonSchema = new Schema ({
  type_slctd: {type: String, required: true},
  amount_slctd: {type: Number, required: true},
  description_slctd: {type: String, required: true},
}, , {timestamps: true});

module.exports = model('Reason', reasonSchema);
