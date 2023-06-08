const Joi = require('joi');


const UserSchema = {
    post: Joi.object({
    firstName: Joi.string().pattern(/^[a-zA-Z]+$/).required(),
    lastName: Joi.string().pattern(/^[a-zA-Z]+$/).required(),
    email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    gender: Joi.string().valid("Male","Female","Other").required(),
    age: Joi.number().integer().min(0).max(100).required(),
    dob: Joi.date()
    .required()
    .max('now')
    .raw()
    .custom((value, helpers) => {
      const age = calculateAge(value);

      if (age < 14) {
        return helpers.error('dateOfBirth.age.invalid');
      }

      return value;
    })
  })
}
  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

module.exports = UserSchema