import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import AuthCtrl from '../controllers/auth.controller';
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap
const authCtrl = new AuthCtrl(null);


router.route('/token')
  .get(authCtrl.token);

export default router;
