import React from 'react';

import { StyledMenuItem, StyledContent, StyledTitle, StyledSubtitle } from './menuItem.style';

const MenuItem = ({ title, imgXl })  => (
  <StyledMenuItem>
  <StyledContent>
    <StyledTitle>{title}</StyledTitle>
    <StyledSubtitle>SHOP NOW</StyledSubtitle>
  </StyledContent>
</StyledMenuItem>
)

export default MenuItem;