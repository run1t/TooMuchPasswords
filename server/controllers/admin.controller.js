import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../../config/config';


class Administrateur {

  constructor(adminisratorService, passwordService) {
    this.adminisratorService = adminisratorService;
    this.passwordService = passwordService;
  }

  add(request, response) {
    
  }

  profil(request, response) {
    
  }

  delete(request, response) {
    
  }
  
  patchProfil(request, response) {

  }
}
export default Administrateur;
