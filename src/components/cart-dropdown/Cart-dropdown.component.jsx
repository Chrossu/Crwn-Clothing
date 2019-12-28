import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import ButtonCustom from '../button-custom/Button-custom.component';
import CartItem from '../cart-item/Cart-item.component';

import { StyledCartDropdownContainer, StyledCartItems, StyledEmptyMessage } from './cart-dropdown.style'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <StyledCartDropdownContainer>
    <StyledCartItems>
      {
        cartItems.length ?
          cartItems.map(item => <CartItem id={item.id} item={item} />)
          :
          <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
      }
    </StyledCartItems>
    <ButtonCustom
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }
      }
    >GO TO CHECKOUT</ButtonCustom>
  </StyledCartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown));