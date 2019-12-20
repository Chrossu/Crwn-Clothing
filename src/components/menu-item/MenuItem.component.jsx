import React from 'react';
import { withRouter } from 'react-router-dom';

import { StyledMenuItem, StyledImage, StyledContent, StyledTitle, StyledSubtitle } from './menuItem.style';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <StyledMenuItem onClick={() => history.push(`${match.url}${linkUrl}`)} size={size}>
    <StyledImage imageUrl={imageUrl} />
    <StyledContent>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledSubtitle>SHOP NOW</StyledSubtitle>
    </StyledContent>
  </StyledMenuItem>
)

export default withRouter(MenuItem);