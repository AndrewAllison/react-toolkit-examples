import jwt, { SignOptions } from 'jsonwebtoken';

export const createMockAccessTokens = () => {
  const opts = {
    expiresIn: '-1d',
    audience: 'test-me',
    subject: '123456789',
  } as SignOptions;
  const tokenPayload = { firsName: 'John', lastName: 'scone' };

  const token = jwt.sign(tokenPayload, '1233534543', opts);
  return token;
};

export const createValidAccessToken = () => {
  const opts = {
    expiresIn: '1d',
    audience: 'test-me',
    subject: '123456789',
  } as SignOptions;
  const tokenPayload = { firsName: 'John', lastName: 'scone' };

  const token = jwt.sign(tokenPayload, '1233534543', opts);
  return token;
};
