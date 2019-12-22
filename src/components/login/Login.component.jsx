import React, { useState } from 'react';

import FormInput from '../form-input/Form-input.component';

import { StyledLoginContainer, StyledForm, StyledInput } from './login.style';

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
      <StyledForm onSubmit={onSubmit}>
        {/* Email Input */}
        <FormInput handleChange={handleChange} name="email" type="email" value={email} label="Email" required />
        {/* Password input */}
        <FormInput handleChange={handleChange} name="password" type="password" value={password} label="Password" required />
        {/* SubmitInput */}
        <StyledInput type="submit" value="Submit Form" />
      </StyledForm>
    </StyledLoginContainer>
  )
}

export default Login;