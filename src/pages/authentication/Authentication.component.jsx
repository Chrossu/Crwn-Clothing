import React from 'react';

import Login from '../../components/login/Login.component';
import Register from '../../components/register/Register.component';

import { StyledAuthenticationContainer } from './authentication.style';

const AuthenticationPage = () => (
  <StyledAuthenticationContainer>
    <Login />
    <Register />
  </StyledAuthenticationContainer>
)

export default AuthenticationPage;