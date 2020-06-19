'use strict'
const { Schema, model } = require('mongoose');
const Applicant = model('Comunity');

const applicantSchema = new Schema ({
  name_slc: {type: String, required: true},
  last_slc: {type: String, required: true},
  dni_slc: {type: Number, required: true},
  age_slc: {type: Number, required: true},
  phone_slc: {type: Number, required: true},
  email_slc: {type: String, required: true},
  applicant: {type: Schema.ObjectId, ref:'Comunity'}
}, , {timestamps: true});

module.exports = model('Applicant', applicantSchema);
