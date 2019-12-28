import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { StyledCartIconContainer, StyledCartIcon, StyledItemCount } from './cart-icon.style'

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <StyledCartIconContainer onClick={toggleCartHidden}>
    <StyledCartIcon />
    <StyledItemCount>{itemsCount}</StyledItemCount>
  </StyledCartIconContainer>
)

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);