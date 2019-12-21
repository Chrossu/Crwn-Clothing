import React, { useState } from 'react';

import { StyledLoginContainer, StyledForm, StyledInput, StyledLabel } from './login.style';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = state;

  const onChange = e => {
    const { name, value } = e.target;
    console.log(state);

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
        <StyledInput onChange={onChange} name="email" type="email" value={email} required />
        <StyledLabel>Email</StyledLabel>
        {/* Password input */}
        <StyledInput onChange={onChange} name="password" type="password" value={password} required />
        <StyledLabel>Password</StyledLabel>
        {/* SubmitInput */}
        <StyledInput type="submit" value="Submit Form" />
      </StyledForm>
    </StyledLoginContainer>
  )
}

export default Login;