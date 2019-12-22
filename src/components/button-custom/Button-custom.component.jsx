import React from 'react';

import { StyledButton } from './buttom-custom.style';

const Button = ({ children, ...otherProps }) => (
    <StyledButton {...otherProps}>
        {children}
    </StyledButton>
)

export default Button;