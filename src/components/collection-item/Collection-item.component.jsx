import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { StyledCollectionItem, StyledImage, StyledCollectionFooter, StyledName, StyledPrice, StyledButton } from './collection-item.style';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <StyledCollectionItem>
      <StyledImage imageUrl={imageUrl} />
      <StyledCollectionFooter>
        <StyledName>{name.toUpperCase()}</StyledName>
        <StyledPrice>${price}</StyledPrice>
      </StyledCollectionFooter>
      <StyledButton onClick={() => addItem(item)} color="inverted">ADD TO CART</StyledButton>
    </StyledCollectionItem>
  )
}

export default connect(null, { addItem })(CollectionItem);