import React from 'react';
import { connect } from 'react-redux';

import { removeCartItem, removeItemQuantity, addItem } from '../../redux/cart/cart.actions';

import { StyledContainer, StyledImageContainer, StyledItem, StyledQuantityItem, StyledRemove } from './checkout-item.style'

const CheckoutItem = ({ cartItem, removeCartItem, removeItemQuantity, addItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={imageUrl} alt="item" />
      </StyledImageContainer>
      <StyledItem>{name}</StyledItem>
      <StyledQuantityItem>
        <div onClick={() => removeItemQuantity(id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </StyledQuantityItem>
      <StyledItem>{price}</StyledItem>
      <StyledRemove onClick={() => removeCartItem(id)}>&#10005;</StyledRemove>
    </StyledContainer>
  )
}

export default connect(null, { removeCartItem, removeItemQuantity, addItem })(CheckoutItem);