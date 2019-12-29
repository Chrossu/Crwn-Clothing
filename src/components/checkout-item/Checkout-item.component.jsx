import React from 'react';

import { StyledContainer, StyledImageContainer, StyledItem, StyledQuantityItem, StyledRemove } from './checkout-item.style'

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => {
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
      <StyledRemove>&#10005;</StyledRemove>
    </StyledContainer>
  )
}

export default CheckoutItem;