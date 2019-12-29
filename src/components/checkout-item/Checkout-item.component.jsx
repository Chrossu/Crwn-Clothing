import React from 'react';

import { StyledContainer, StyledImageContainer, StyledItem, StyledQuantityItem, StyledRemove } from './checkout-item.style'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={imageUrl} alt="item" />
        <StyledItem>{name}</StyledItem>
        <StyledQuantityItem>
          <div>&#10094;</div>
          <span>{quantity}</span>
          <div>&#10095;</div>
        </StyledQuantityItem>
        <StyledItem>{price}</StyledItem>
        <StyledRemove>&#10005;</StyledRemove>
      </StyledImageContainer>
    </StyledContainer>
  )
}

export default CheckoutItem;