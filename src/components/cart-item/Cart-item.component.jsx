import React from 'react';

import { StyledCartItemContainer, StyledImage, StyledItemDetails, StyledName, StyledPrice } from './cart-item.style';

const CartItem = ({ item: { name, price, imageUrl, quantity }}) => (
  <StyledCartItemContainer>
    <StyledImage src={imageUrl} alt="item" />
    <StyledItemDetails>
      <StyledName>{name}</StyledName>
      <StyledPrice>{quantity} x ${price}</StyledPrice>
    </StyledItemDetails>
  </StyledCartItemContainer>
)

export default CartItem;