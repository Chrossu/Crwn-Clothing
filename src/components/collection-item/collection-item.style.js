import styled from 'styled-components';
import ButtonCustom from '../button-custom/Button-custom.component';

export const StyledCollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const StyledButton = styled(ButtonCustom)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 70%;
  transition: opacity 0.3s ease;

  ${StyledCollectionItem}:hover & {
    opacity: 0.8;
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 95%;
  background: url('${(({ imageUrl }) => imageUrl)}') center center / cover;
  margin-bottom: 5px;
  opacity: 1;
  transition: opacity 0.2s ease;


  ${StyledCollectionItem}:hover & {
    opacity: 0.8;
  }
`;

export const StyledCollectionFooter = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  margin-bottom: 1rem;
`;

export const StyledName = styled.span`
  width: 90%;
`;

export const StyledPrice = styled.span`
  width: 10%;
`;