import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../../config/config';


class Administrateur {

  constructor(adminisrateurService, passwordService) {
    this.adminisrateurService = adminisrateurService;
    this.passwordService = passwordService;
  }

  index(request, response) {
    return undefined;
  }

  token(request, response) {
    const token = this.adminisrateurService.getToken(request.params('admin')), this.passwordService.getToken(request.params('amin'));
    if (!token) {
      return response.json({ error: 'test', status: 'zefa' });
    }
    return response.json({ token });
  }

}
export default Administrateur;
