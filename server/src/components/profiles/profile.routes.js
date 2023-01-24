const router = require('express').Router();
const profileController = require('./profile.controller');
const profileValidation = require('./profile.validation');
const auth = require('../../middleware/auth');
const validate = require('../../middleware/validate');

/**
 * @route   POST / DELETE api/profiles/follow/:userId
 * skirta Follow / unfollow profilį
 * prieinamas tik vartotojui
 */
router
  .route('/follow/:userId')
  .post(auth(), validate(profileValidation.getProfile), profileController.followProfile)
  .delete(auth(), validate(profileValidation.getProfile), profileController.unfollowProfile);

/**
 *  route  GET api/profiles
 *  rodomas vartotojas
 *  prieinamumas viešas
 */
router.get('/', validate(profileValidation.getProfiles), profileController.getProfiles);

/**
 * oute GET api/profiles/:userId
 * rodomas vartotojo profilis
 * prieinamumas viešas
 */
router.get('/:userId', validate(profileValidation.getProfile), profileController.getProfile);

/**
 * route   PATCH api/profiles/:userId
 * Atnaujinamas vartotojo profilis
 * prieinamumas admin
 */
router.patch(
  '/:userId',
  auth('manageUsers'),
  validate(profileValidation.updateProfile),
  profileController.updateProfile
);

module.exports = router;
