import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import AdminCtrl from '../controllers/admin.controller';
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap
const adminCtrl = new AdminCtrl(null);


router.route('/token')
  .get(adminCtrl.token);

export default router;
