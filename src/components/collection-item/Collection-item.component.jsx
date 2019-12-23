import React from 'react';

import { StyledCollectionItem, StyledImage, StyledCollectionFooter, StyledName, StyledPrice, StyledButton } from './collection-item.style';

const CollectionItem = ({ name, imageUrl, price }) => (
    <StyledCollectionItem>
      <StyledImage imageUrl={imageUrl} />
      <StyledCollectionFooter>
        <StyledName>{name.toUpperCase()}</StyledName>
        <StyledPrice>${price}</StyledPrice>
      </StyledCollectionFooter>
      <StyledButton color="inverted">ADD TO CART</StyledButton>
    </StyledCollectionItem>
)

export default CollectionItem;