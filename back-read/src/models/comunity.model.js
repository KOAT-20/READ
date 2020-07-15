'use strict'
const { Schema, model } = require('mongoose');

const comunitySchema = new Schema ({
  name_comunity: {type: String, required: true},
  state_comunity: {type: String, required: true},
  mncp_comunity: {type: String, required: true},
  parish_comunity: {type: String, required: true},
  postal_c_comunity: {type: Number, required: true},
  applicant_id: {type: Schema.Types.ObjectId, ref: 'Applicant'}
}, {timestamps: true});

module.exports = model('Comunity', comunitySchema);
