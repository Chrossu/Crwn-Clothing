import styled, { css } from 'styled-components';

const defaultButtonStyle = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;

const googleSignStyle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: 1px solid transparent;
  }
`;

const getButtonStyles = props => {
  switch (props.color) {
    case "googleSignIn":
      return googleSignStyle;
    case "inverted":
      return invertedButtonStyle;
    default:
      return defaultButtonStyle;
  }
}

export const StyledButton = styled.button`
  min-width: 125px;
  with: auto;
  height: 50px;
  letter-spacing: 0.8px;
  border: 1px solid transparent;
  padding: 0 35px;
  font-size 0.95rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-seriff;
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.2s ease;

  ${getButtonStyles}
`;