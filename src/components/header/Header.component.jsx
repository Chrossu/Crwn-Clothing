import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { StyledHeader, StyledOption, StyledLogoContainer, StyledLogo, StyledOptionsContainer } from './header.style';

const Header = ({ currentUser }) => (
  <StyledHeader>
    <StyledLogoContainer to="/">
      <StyledLogo />
    </StyledLogoContainer>
    {/* Options Links container */}
    <StyledOptionsContainer>
      <StyledOption as={Link} to="/shop">SHOP</StyledOption>
      <StyledOption as={Link} to="/contact">CONTACT</StyledOption>
      {
        currentUser ?
          <StyledOption onClick={() => auth.signOut()}>SIGN OUT</StyledOption>
          :
          <StyledOption as={Link} to="/auth">SIGN IN</StyledOption>
      }
    </StyledOptionsContainer>
  </StyledHeader>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);