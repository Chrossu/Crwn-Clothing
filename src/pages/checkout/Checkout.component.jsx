import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/Checkout-item.component';

import { StyledCheckoutContainer, StyledHeader, StyledHeaderBlock, StyledSpan, StyledTotal } from './checkout.style'

const CheckoutPage = ({ cartItems, total }) => (
  <StyledCheckoutContainer>
    <StyledHeader>
      {/* Product block */}
      <StyledHeaderBlock>
        <StyledSpan>Product</StyledSpan>
      </StyledHeaderBlock>
      {/* Description block */}
      <StyledHeaderBlock>
        <StyledSpan>Description</StyledSpan>
      </StyledHeaderBlock>
      {/* Qunatity block */}
      <StyledHeaderBlock>
        <StyledSpan>Quantity</StyledSpan>
      </StyledHeaderBlock>
      {/* Price block */}
      <StyledHeaderBlock>
        <StyledSpan>Price</StyledSpan>
      </StyledHeaderBlock>
      {/* Remove product block */}
      <StyledHeaderBlock>
        <StyledSpan>Remove</StyledSpan>
      </StyledHeaderBlock>
    </StyledHeader>
    {
      cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} />)
    }
    <StyledTotal>
      <StyledSpan>TOTAL: ${total}</StyledSpan>
    </StyledTotal>
  </StyledCheckoutContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);