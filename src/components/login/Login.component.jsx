import React, { useState } from 'react';

import { StyledLoginContainer, StyledForm, StyledInput, StyledLabel } from './login.style';

const Login = () => (
    <StyledLoginContainer>
      <StyledForm>
        {/* Email Input */}
        <StyledInput name="email" type="email" value={email} required />
        <StyledLabel></StyledLabel>
        {/* Password input */}
        <StyledInput name="password" type="password" value={password} required />
        <StyledLabel></StyledLabel>
        {/* SubmitInput */}
        <StyledInput type="submit" value="Submit Form" />
      </StyledForm>
    </StyledLoginContainer>
)

export default Login;