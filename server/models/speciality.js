const mongoose = require("mongoose");
const Joi = require("joi");

const specialitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  /**semesters: [
    {
      type: semesterSchema,
      required: true,
    },
  ],*/
});

const Speciality = new mongoose.model("Speciality", specialitySchema);

function validateSpeciality(speciality) {}

exports.specialitySchema = specialitySchema;
exports.Speciality = Speciality;
exports.validate = validateSpeciality;
