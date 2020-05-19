const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  /* when the req is sent and they do not enter the name, it is going to be empty(null)
   *  and not an empty string. It needs to be a string before isEmpty would work*/

  // for fields that are required according to the profile model
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "Start date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
