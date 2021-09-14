import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';
import { authConfig } from '../config';

const { baseUrl } = authConfig;
console.log(baseUrl);
export const client = new GraphQLClient(baseUrl);
export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
