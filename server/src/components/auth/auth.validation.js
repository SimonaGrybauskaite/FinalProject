const Joi = require('joi');
const { password, url } = require('../../utils/customValidation');
// vardas,username email, password privalomas
// galimybė pridėti prifilio nuotrauką naudojant url
//username privalo būti nuo 3 iki 30 elementų
const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required().min(3).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    avatar: Joi.string().custom(url).max(255),
  }),
};
// prisijungiant username ir pass privalomi
const login = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  login,
  register,
};
