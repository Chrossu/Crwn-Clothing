import React from 'react';

import CollectionItem from '../collection-item/Collection-item.component';

import { StyledCollectionPreview, StyledTitle, StyledPreviewContainer } from './collection-preview.style';

const CollectionPreview = ({ title, items }) => (
  <StyledCollectionPreview>
    <StyledTitle>{title.toUpperCase()}</StyledTitle>
    <StyledPreviewContainer>
      {
        items
          .filter((a, idx) => idx < 4)
          .map(item =>
            <CollectionItem key={item.id} item={item} />)
      }
    </StyledPreviewContainer>
  </StyledCollectionPreview>
)

export default CollectionPreview;