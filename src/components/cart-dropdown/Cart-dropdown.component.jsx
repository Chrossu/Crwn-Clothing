import React from 'react';
import { connect } from 'react-redux';

import ButtonCustom from '../button-custom/Button-custom.component';
import CartItem from '../cart-item/Cart-item.component';

import { StyledCartDropdownContainer, StyledCartItems } from './cart-dropdown.style'

const CartDropdown = ({ cartItems }) => (
    <StyledCartDropdownContainer>
      <StyledCartItems>
        {cartItems.map(item => <CartItem id={item.id} item={item} /> )}
      </StyledCartItems>
      <ButtonCustom>GO TO CHECKOUT</ButtonCustom>
    </StyledCartDropdownContainer>
)

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);