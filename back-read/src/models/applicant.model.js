'use strict'
const { Schema, model } = require('mongoose');
const { comunitySchema } = require('./comunity.model.js');
const Comunity = model('Comunity', comunitySchema);
const { reasonSchema } = require('./reason.model.js');
const Reason = model('Reason', reasonSchema);

const applicantSchema = new Schema ({
  name_slc: {type: String, required: true},
  last_slc: {type: String, required: true},
  dni_slc: {type: Number, required: true},
  age_slc: {type: Number, required: true},
  phone_slc: {type: Number, required: true},
  email_slc: {type: String, required: true},
  comunity: [{type: Schema.ObjectId, ref: Comunity}],
  reason: [{type: Schema.ObjectId, ref: Reason}]
}, {timestamps: true});

module.exports = model('Applicant', applicantSchema);
