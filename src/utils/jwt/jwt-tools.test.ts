import jwt, { SignOptions } from 'jsonwebtoken';
import { isTokenExpired } from './jwt-tools';

describe('jwt-tools', () => {
  describe('isTokenValid', () => {
    it('should return false if the token is empty', () => {
      expect(isTokenExpired((''))).toEqual(false);
    });
    it('should return false if the token is expired', () => {
      const opts = {
        expiresIn: '-1d',
        audience: 'test-me',
        subject: '123456789',
      } as SignOptions;
      const tokenPayload = { firsName: 'John', lastName: 'scone' };

      const token = jwt.sign(tokenPayload, '1233534543', opts);

      expect(isTokenExpired(token)).toEqual(false);
    });
    it('should return true if the token is not expired', () => {
      const opts = {
        expiresIn: '1d',
        audience: 'test-me',
        subject: '123456789',
      } as SignOptions;
      const tokenPayload = { firsName: 'John', lastName: 'scone' };

      const token = jwt.sign(tokenPayload, '1233534543', opts);

      expect(isTokenExpired(token)).toEqual(true);
    });
  });
});
