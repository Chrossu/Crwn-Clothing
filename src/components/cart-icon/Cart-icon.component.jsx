import React from 'react';

import { StyledCartIconContainer, StyledCartIcon, StyledItemCount } from './cart-icon.style'

const CartIcon = () => (
  <StyledCartIconContainer>
    <StyledCartIcon />
    <StyledItemCount>0</StyledItemCount>
  </StyledCartIconContainer>
)

export default CartIcon;