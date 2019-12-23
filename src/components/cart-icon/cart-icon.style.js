import styled from 'styled-components';

import { ReactComponent as CartIcon } from '../../assets/cart.svg';

export const StyledCartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-top: 8px;

  @media screen and (max-width: 800px) {
    padding-top: 10px;
  }
`;

export const StyledCartIcon = styled(CartIcon)`
  height: 35px;
  width: 35px;

  @media screen and (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;

export const StyledItemCount = styled.span`
  position: absolute;
  font-size: 0.8rem;
  font-weight: bold;
  bottom: 4px;
`;