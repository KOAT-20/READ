'use strict'
const { Schema, model } = require('mongoose');
const { reasonSchema } = require('./reason.model.js');
const Reason = model('Reason', reasonSchema);

const comunitySchema = new Schema ({
  name_comunity: {type: String, required: true},
  state_comunity: {type: String, required: true},
  mncp_comunity: {type: String, required: true},
  parish_comunity: {type: String, required: true},
  postal_c_comunity: {type: Number, required: true},
  reason: {type: Schema.ObjectId, ref: Reason}
}, {timestamps: true});

module.exports = model('Comunity', comunitySchema);
