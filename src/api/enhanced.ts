import { api as generatedApi } from './generated';
import { client } from './api';

export const api = generatedApi.enhanceEndpoints({
  endpoints: {
    token: {
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        client.setHeader('authentication', `Bearer ${(data as any).accessToken}`);
      },
    },
  },
});

export const { useTokenMutation } = api;
