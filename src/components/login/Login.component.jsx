import React, { useState } from 'react';

import FormInput from '../form-input/Form-input.component';
import ButtonCustom from '../button-custom/Button-custom.component';

import { StyledLoginContainer, StyledTitle } from './login.style';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = state;

  const handleChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault();
    setState({
      email: '',
      password: ''
    })
    console.log('Logineado');
  }

  return (
    <StyledLoginContainer>
      <StyledTitle>I already have an account</StyledTitle>
      <span>Sign in with your email and password.</span>
      <form onSubmit={onSubmit}>
        {/* Email Input */}
        <FormInput handleChange={handleChange} name="email" type="email" value={email} label="Email" required />
        {/* Password input */}
        <FormInput handleChange={handleChange} name="password" type="password" value={password} label="Password" required />
        {/* SubmitInput */}
        <ButtonCustom type="submit">Sign In</ButtonCustom>
      </form>
    </StyledLoginContainer>
  )
}

export default Login;