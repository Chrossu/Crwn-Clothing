import React from 'react';


import { StyledHeader, StyledLink, StyledLogoContainer, StyledLogo, StyledOptionsContainer } from './header.style';

const Header = () => (
  <StyledHeader>
    <StyledLogoContainer to="/">
      <StyledLogo />
    </StyledLogoContainer>
    {/* Options Links container */}
    <StyledOptionsContainer>
      <StyledLink to="/shop">SHOP</StyledLink>
      <StyledLink to="/contact">CONTACT</StyledLink>
    </StyledOptionsContainer>
  </StyledHeader>
)

export default Header;