import React from 'react';

import Login from '../../components/login/Login.component';

import { StyledAuthenticationContainer } from './authentication.style';

const AuthenticationPage = () => (
  <StyledAuthenticationContainer>
    <Login />
  </StyledAuthenticationContainer>
)

export default AuthenticationPage;