import React from 'react';
import SignOut from '../../../auth/SignOut';

const AuthenticatedButtons = () => {
  return <div className="auth-buttons">
    <SignOut/>
  </div>;
};

export default AuthenticatedButtons;
