import React, { useState } from 'react';

import FormInput from '../form-input/Form-input.component';
import ButtonCustom from '../button-custom/Button-custom.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import { StyledLoginContainer, StyledTitle, StyledButtonContainer } from './login.style';

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

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setState({
        email: '',
        password: ''
      })
    } catch (err) {
      console.error(err);
    }

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
        {/* Buttons containers */}
        <StyledButtonContainer>
          <ButtonCustom type="submit">Sign In</ButtonCustom>
          <ButtonCustom as="div" onClick={signInWithGoogle} color={"googleSignIn"}>Sign In With Google</ButtonCustom>
        </StyledButtonContainer>
      </form>
    </StyledLoginContainer>
  )
}

export default Login;