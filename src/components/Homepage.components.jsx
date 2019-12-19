import React from 'react';

import { StyledHomepageContainer, StyledDirectoryMenu, StyledMenuItem, StyledContent, StyledTitle, StyledSubtitle } from './homepage.style';

const HomePage = () => (
    <StyledHomepageContainer>
      <StyledDirectoryMenu>
        {/* Item 1 */}
        <StyledMenuItem>
          <StyledContent>
            <StyledTitle>HATS</StyledTitle>
            <StyledSubtitle>SHOP NOW</StyledSubtitle>
          </StyledContent>
        </StyledMenuItem>
        {/* Item 2 */}
        <StyledMenuItem>
          <StyledContent>
            <StyledTitle>JACKETS</StyledTitle>
            <StyledSubtitle>SHOP NOW</StyledSubtitle>
          </StyledContent>
        </StyledMenuItem>
        {/* Item 3 */}
        <StyledMenuItem>
          <StyledContent>
            <StyledTitle>SNEAKERS</StyledTitle>
            <StyledSubtitle>SHOP NOW</StyledSubtitle>
          </StyledContent>
        </StyledMenuItem>
        {/* Item 4 */}
        <StyledMenuItem>
          <StyledContent>
            <StyledTitle>WOMENS</StyledTitle>
            <StyledSubtitle>SHOP NOW</StyledSubtitle>
          </StyledContent>
        </StyledMenuItem>
        {/* Item 5 */}
        <StyledMenuItem>
          <StyledContent>
            <StyledTitle>MENS</StyledTitle>
            <StyledSubtitle>SHOP NOW</StyledSubtitle>
          </StyledContent>
        </StyledMenuItem>
      </StyledDirectoryMenu>
    </StyledHomepageContainer>
)

export default HomePage;