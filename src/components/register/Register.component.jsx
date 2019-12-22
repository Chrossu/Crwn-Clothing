import React, { useState } from 'react';

import FormInput from '../form-input/Form-input.component';
import ButtonCustom from '../button-custom/Button-custom.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { StyledRegister, StyledTitle } from './register.style';

const Register = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = state;

  const onChange = e => {
    const { name, value } = e.target;

    setState({...state, [name]: value })
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('Passwords does not match');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      alert('User created');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <StyledRegister>
      <StyledTitle>I do not have an Account</StyledTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        {/* Display name input */}
        <FormInput 
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          label="Display Name"
          required
        />
        {/* Email input */}
        <FormInput 
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          label="Email"
          required
        />
        {/* Password input */}
        <FormInput 
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          label="Password"
          required
        />
        {/* Confirm password input */}
        <FormInput 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          label="Confirm password"
          required
        />
        <ButtonCustom type="submit">Sign up</ButtonCustom>
      </form>
    </StyledRegister>
  )
}

export default Register;