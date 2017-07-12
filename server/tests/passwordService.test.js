import chai, { expect } from 'chai';
import PasswordService from '../services/passwords.service';

chai.config.includeStack = true;

describe('## Password service', () => {
  const passwordList = [{
    login: 'reunanln@gmail.com',
    password: 'reunan',
    url: 'reunan.com'
  }];

  const user = {
    id: 2,
    login: 'reunanln@gmail.com'
  };

  describe('### Password service get list of password', () => {
    let passwordService = null;

    beforeEach(() => {
      passwordService = new PasswordService(null, null);
    });

    it('Should get an array of passwords', () => {
      passwordService._user = user;

      passwordService._passwordModel = {
        find: () => passwordList
      };

      passwordService.list()
        .then((list) => {
          expect(list).to.be.an.array();
          expect(list[0]).to.include(passwordList);
        })
        .catch((err) => {
          expect(err).to.be.null();
        });
    });

    it('Should return an empty array', () => {
      passwordService._user = user;

      passwordService._passwordModel = {
        find: () => []
      };

      passwordService.list()
        .then((list) => {
          expect(list).to.be.an.array();
          expect(list.length).to.be(0);
        })
        .catch((err) => {
          expect(err).to.be.null();
        });
    });

    it('Should return an exception', () => {
      passwordService._user = user;

      passwordService._passwordModel = {
        find: () => {
          return new Promise((resolve, reject) => {
            reject({ message: 'Error' });
          });
        }
      };

      passwordService.list()
        .then((list) => {
          expect(list).to.be.null();
        })
        .catch((err) => {
          expect(err).to.be({ message: 'Error' });
        });
    });
  });
});
