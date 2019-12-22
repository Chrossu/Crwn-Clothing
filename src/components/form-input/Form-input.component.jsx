import React from 'react';

import { StyledGroup, StyledInput, StyledLabel } from './form-input.style';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <StyledGroup>
    <StyledInput onChange={handleChange} {...otherProps} />
    {
      label &&
      <StyledLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </StyledLabel>
    }
  </ StyledGroup>
)

export default FormInput;