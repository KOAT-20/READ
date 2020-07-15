'use strict'
const { Schema, model } = require('mongoose');
const { comunitySchema } = require('./comunity.model.js');
const Comunity = model('Comunity', comunitySchema);

const applicantSchema = new Schema ({
  name_slc: {type: String, required: true},
  last_slc: {type: String, required: true},
  dni_slc: {type: Number, required: true},
  age_slc: {type: Number, required: true},
  phone_slc: {type: Number, required: true},
  email_slc: {type: String, required: true},
  comunity_id: [{type: Schema.Types.ObjectId, ref: Comunity}]
}, {timestamps: true});

module.exports = model('Applicant', applicantSchema);
