const router = require('express').Router();
const authController = require('./auth.controller');
const authValidation = require('./auth.validation');
const validate = require('../../middleware/validate');

/**

 * @route   POST api/auth/register
 * užregistruoja ir gražina JWT
 * prieinamumas viešas
 */
router.post('/register', validate(authValidation.register), authController.registerUser);

/**
 * @route  POST api/users/login
 * @ prisijungia vartotojas ir grąžina JWT
 * @prieinamumas viešas(public)
 */
router.post('/login', validate(authValidation.login), authController.loginUser);

module.exports = router;
