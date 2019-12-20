import React from 'react';

import { StyledMenuItem, StyledImage, StyledContent, StyledTitle, StyledSubtitle } from './menuItem.style';

const MenuItem = ({ title, imageUrl, size }) => (
  <StyledMenuItem size={size}>
    <StyledImage imageUrl={imageUrl} />
    <StyledContent>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledSubtitle>SHOP NOW</StyledSubtitle>
    </StyledContent>
  </StyledMenuItem>
)

export default MenuItem;