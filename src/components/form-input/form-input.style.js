import styled, { css } from 'styled-components';

const primaryColor = 'black';
const secondaryColor = 'grey';

const isShrink = css`
  top: -17px;
  font-size: 14px;
  color: ${primaryColor};
`;

export const StyledGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3rem;
  }
`;

export const StyledInput = styled.input`
  background: none;
  background-color: #fff;
  color: ${secondaryColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  color: ${secondaryColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${isShrink}
  }

  ${StyledInput}:focus & {
    ${isShrink}
  }
`;