import styled from 'styled-components';

export const StyledCartDropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 60px;
  height: 340px;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;
`;

export const StyledCartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;