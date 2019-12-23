import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { StyledCartIconContainer, StyledCartIcon, StyledItemCount } from './cart-icon.style'

const CartIcon = ({ toggleCartHidden }) => (
  <StyledCartIconContainer onClick={toggleCartHidden}>
    <StyledCartIcon />
    <StyledItemCount>0</StyledItemCount>
  </StyledCartIconContainer>
)

export default connect(null, { toggleCartHidden })(CartIcon);