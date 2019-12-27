import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { StyledCartIconContainer, StyledCartIcon, StyledItemCount } from './cart-icon.style'

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <StyledCartIconContainer onClick={toggleCartHidden}>
    <StyledCartIcon />
    <StyledItemCount>{itemsCount}</StyledItemCount>
  </StyledCartIconContainer>
)

const mapStateToProps = state => ({
  itemsCount: state.cart.cartItems.reduce((a, b) => a + b.quantity, 0)
})

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);