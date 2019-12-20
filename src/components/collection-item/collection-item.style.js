import styled from 'styled-components';

export const StyledCollectionItem = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 95%;
  background: url('${(({ imageUrl }) => imageUrl)}') center center / cover;
  margin-bottom: 5px;
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