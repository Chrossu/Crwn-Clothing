import React from 'react';
// import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { StyledHeader, StyledLink, StyledLogoContainer, StyledLogo, StyledOptionsContainer } from './header.style';

const Header = ({ currentUser }) => (
  <StyledHeader>
    <StyledLogoContainer to="/">
      <StyledLogo />
    </StyledLogoContainer>
    {/* Options Links container */}
    <StyledOptionsContainer>
      <StyledLink to="/shop">SHOP</StyledLink>
      <StyledLink to="/contact">CONTACT</StyledLink>
      {
        currentUser ?
          <StyledLink as="div" onClick={() => auth.signOut()}>SIGN OUT</StyledLink>
          :
          <StyledLink to="/auth">SIGN IN</StyledLink>
      }
    </StyledOptionsContainer>
  </StyledHeader>
)

// const mapStateToProps = state => ({
//   user: state.user.currentUser
// })

export default Header;