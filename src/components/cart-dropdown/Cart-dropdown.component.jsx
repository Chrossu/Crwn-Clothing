import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ButtonCustom from '../button-custom/Button-custom.component';
import CartItem from '../cart-item/Cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { StyledCartDropdownContainer, StyledCartItems } from './cart-dropdown.style'

const CartDropdown = ({ cartItems }) => (
    <StyledCartDropdownContainer>
      <StyledCartItems>
        {cartItems.map(item => <CartItem id={item.id} item={item} /> )}
      </StyledCartItems>
      <ButtonCustom>GO TO CHECKOUT</ButtonCustom>
    </StyledCartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);