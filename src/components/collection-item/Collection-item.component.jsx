import React from 'react';

import { StyledCollectionItem, StyledImage, StyledCollectionFooter, StyledName, StyledPrice } from './collection-item.style';

const CollectionItem = ({ id, name, imageUrl, price }) => (
    <StyledCollectionItem>
      <StyledImage imageUrl={imageUrl} />
      <StyledCollectionFooter>
        <StyledName>{name.toUpperCase()}</StyledName>
        <StyledPrice>${price}</StyledPrice>
      </StyledCollectionFooter>
    </StyledCollectionItem>
)

export default CollectionItem;