import React from 'react';

import ButtonCustom from '../button-custom/Button-custom.component';

import { StyledCartDropdownContainer, StyledCartItems } from './cart-dropdown.style'

const CartDropdown = () => (
    <StyledCartDropdownContainer>
      <StyledCartItems />
      <ButtonCustom>GO TO CHECKOUT</ButtonCustom>
    </StyledCartDropdownContainer>
)

export default CartDropdown;