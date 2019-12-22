import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 125px;
  with: auto;
  height: 50px;
  background-color: black;
  color: white;
  letter-spacing: 0.8px;
  font-size 0.95rem;
  transition: all 0.2s ease;
  font-weight: bolder;
  text-transform: uppercase;
  border: none;
  padding: 0 35px;
  cursor: pointer;
  font-family: 'Open Sans Condensed', sans-seriff;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;