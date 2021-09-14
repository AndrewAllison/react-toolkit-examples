import { createTransform } from 'redux-persist';
import { client } from '../../api/api';
import { isTokenExpired } from '../../utils/jwt/jwt-tools';

const TokenTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: any) => {
    const isValid = inboundState.accessToken ? isTokenExpired(inboundState.accessToken) : false;
    return ({ ...inboundState, isValid });
  },
  // transform state being rehydrated
  (outboundState) => {
    const isValid = outboundState.accessToken ? isTokenExpired(outboundState.accessToken) : false;
    if (isValid) {
      client.setHeader('authentication', `Bearer ${outboundState.accessToken}`);
    }
    return { ...outboundState, isValid }
  },
  { whitelist: ['token'] },
);

export default TokenTransform;
