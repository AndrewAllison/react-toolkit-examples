/* eslint-disable */
import { api } from './api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthorizeResponse = {
  __typename?: 'AuthorizeResponse';
  code?: Maybe<Scalars['String']>;
  uic?: Maybe<Scalars['String']>;
};

export type LoginRequest = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Used as the first part of the login process, provides a code to be exchanged for an auth token */
  authorize?: Maybe<AuthorizeResponse>;
  /** Register a new user with the given details */
  register?: Maybe<AuthorizeResponse>;
  /** Exchange code and uic for accessToken */
  token?: Maybe<TokenResponse>;
};


export type MutationAuthorizeArgs = {
  authorizeData?: Maybe<LoginRequest>;
};


export type MutationRegisterArgs = {
  registrationData?: Maybe<RegisterUserInput>;
};


export type MutationTokenArgs = {
  tokenRequest?: Maybe<TokenRequest>;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<UserProfile>;
};

/** User registration input */
export type RegisterUserInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type TokenRequest = {
  code?: Maybe<Scalars['String']>;
  uic?: Maybe<Scalars['String']>;
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  accessToken?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};

export type AuthorizeMutationVariables = Exact<{
  authorizeLoginDetails?: Maybe<LoginRequest>;
}>;


export type AuthorizeMutation = { __typename?: 'Mutation', authorize?: Maybe<{ __typename?: 'AuthorizeResponse', code?: Maybe<string>, uic?: Maybe<string> }> };

export type TokenMutationVariables = Exact<{
  tokenTokenRequest?: Maybe<TokenRequest>;
}>;


export type TokenMutation = { __typename?: 'Mutation', token?: Maybe<{ __typename?: 'TokenResponse', accessToken?: Maybe<string>, profile?: Maybe<{ __typename?: 'UserProfile', id: string, displayName?: Maybe<string>, email?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string> }> }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: Maybe<{ __typename?: 'UserProfile', id: string, displayName?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, email?: Maybe<string> }> };


export const AuthorizeDocument = `
    mutation authorize($authorizeLoginDetails: LoginRequest) {
  authorize(authorizeData: $authorizeLoginDetails) {
    code
    uic
  }
}
    `;
export const TokenDocument = `
    mutation token($tokenTokenRequest: TokenRequest) {
  token(tokenRequest: $tokenTokenRequest) {
    accessToken
    profile {
      id
      displayName
      email
      firstName
      lastName
    }
  }
}
    `;
export const ProfileDocument = `
    query profile {
  profile {
    id
    displayName
    firstName
    lastName
    email
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authorize: build.mutation<AuthorizeMutation, AuthorizeMutationVariables | void>({
      query: (variables) => ({ document: AuthorizeDocument, variables })
    }),
    token: build.mutation<TokenMutation, TokenMutationVariables | void>({
      query: (variables) => ({ document: TokenDocument, variables })
    }),
    profile: build.query<ProfileQuery, ProfileQueryVariables | void>({
      query: (variables) => ({ document: ProfileDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAuthorizeMutation, useTokenMutation, useProfileQuery, useLazyProfileQuery } = injectedRtkApi;

