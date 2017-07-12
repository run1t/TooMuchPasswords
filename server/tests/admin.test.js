import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import chai, { expect } from 'chai';
import app from '../../index';
import config from '../../config/config';
import AdminCtrl from '../controllers/admin.controller';

chai.config.includeStack = true;

describe('## Admin Controller', () => {
  let adminCtrl = null;

  beforeEach(() => {
    adminCtrl = new AdminCtrl(null);
  });

  const validUserCredentials = {
    username: 'react',
    password: 'express'
  };

  const invalidUserCredentials = {
    username: 'react',
    password: 'IDontKnow'
  };

  describe('# ', () => {
    /**
     * Should return an object of type
     * {
     *  'error' : 'Message d'erreur',
     *  'status' : 403
     * }
     */
    it('It should return an Administrateur Error', () => {
      const request = {
        params: () => 'test','mypwd'
      };

      const response = {
        json: (data) => {
          expect(data).to.have.property('error');
          expect(data).to.have.property('status');
          expect(data).to.have.property('password');
        }
      };

      adminCtrl.administrateurService = {
        getToken: () => null
      };

      authCtrl.token(request, response);
    });

    it('should get valid JWT token', (done) => {
      request(app)
        .post('/api/auth/login')
        .send(validUserCredentials)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.have.property('token');
          jwt.verify(res.body.token, config.jwtSecret, (err, decoded) => {
            expect(err).to.not.be.ok; // eslint-disable-line no-unused-expressions
            expect(decoded.username).to.equal(validUserCredentials.username);
            jwtToken = `Bearer ${res.body.token}`;
            done();
          });
        })
        .catch(done);
    });
  });

  describe('# GET /api/auth/random-number', () => {
    it('should fail to get random number because of missing Authorization', (done) => {
      request(app)
        .get('/api/auth/random-number')
        .expect(httpStatus.UNAUTHORIZED)
        .then((res) => {
          expect(res.body.message).to.equal('Unauthorized');
          done();
        })
        .catch(done);
    });

    it('should fail to get random number because of wrong token', (done) => {
      request(app)
        .get('/api/auth/random-number')
        .set('Authorization', 'Bearer inValidToken')
        .expect(httpStatus.UNAUTHORIZED)
        .then((res) => {
          expect(res.body.message).to.equal('Unauthorized');
          done();
        })
        .catch(done);
    });

    it('should get a random number', (done) => {
      request(app)
        .get('/api/auth/random-number')
        .set('Authorization', jwtToken)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.num).to.be.a('number');
          done();
        })
        .catch(done);
    });
  });
});
