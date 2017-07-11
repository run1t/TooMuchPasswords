import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../../config/config';


class Authentication {

  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }

  registration(request, response) {
    return undefined;
  }

  token(request, response) {
    const token = this.authenticationService.getToken(request.params('auth'));
    if (!token) {
      return response.json({ error: 'test', status: 'zefa' });
    }
    return response.json({ token });
  }

}
export default Authentication;
