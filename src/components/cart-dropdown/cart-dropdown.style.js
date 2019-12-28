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

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 8px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
}
`;

export const StyledEmptyMessage = styled.span`
  font-size: 1.15rem;
  margin: 80px auto;
`;