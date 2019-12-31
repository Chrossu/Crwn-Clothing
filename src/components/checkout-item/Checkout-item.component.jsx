import React from 'react';
import { connect } from 'react-redux';

import { removeCartItem } from '../../redux/cart/cart.actions';

import { StyledContainer, StyledImageContainer, StyledItem, StyledQuantityItem, StyledRemove } from './checkout-item.style'

const CheckoutItem = ({ cartItem: { id, name, imageUrl, quantity, price }, removeCartItem }) => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={imageUrl} alt="item" />
      </StyledImageContainer>
      <StyledItem>{name}</StyledItem>
      <StyledQuantityItem>
        <div>&#10094;</div>
        <span>{quantity}</span>
        <div>&#10095;</div>
      </StyledQuantityItem>
      <StyledItem>{price}</StyledItem>
      <StyledRemove onClick={() => removeCartItem(id)}>&#10005;</StyledRemove>
    </StyledContainer>
  )
}

export default connect(null, { removeCartItem })(CheckoutItem);