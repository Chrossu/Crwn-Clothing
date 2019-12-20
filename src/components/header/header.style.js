import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const OptionsContainerStyle = css`
  
`

export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const StyledLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  height: 50%;
  width: 70px;
  padding: 25px 5px;
`;

export const StyledOptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  padding: 25px 15px 0;
  font-size: 1.1rem;
  cursor: pointer;
`;