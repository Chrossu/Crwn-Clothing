import styled from 'styled-components';

export const StyledCheckoutContainer = styled.div`
  width: 55%;
  margin: 50px auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  padding: 10px 0;
`;

export const StyledHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const StyledSpan = styled.span`
  
`;

export const StyledTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size 2.2rem;
`;