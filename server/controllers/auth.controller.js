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

  setToken(request, response) {
    
  }

  getToken(request, response) {

  }

}
export default Authentication;