/**
 * Interface representing the payload of a standard JWT token
 */
export interface JwtBase {
  /**
   * Audience: Whom the token is intended for
   */
  aud: string;
  /**
   * Subject: String representing an id of the "subject" the token refers to.
   * @type {string}
   */
  sub: string;
  /**
   * Issuer: The creator of the token
   * @type {string}
   */
  iss: string;
  /**
   * Issued At: Unix epoch representing when the token was issued.
   * @type {number}
   */
  iat: number;
  /**
   * Expiration: The creator of the token
   * @type {number}
   */
  exp: number;
}
