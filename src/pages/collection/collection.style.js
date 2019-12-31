import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0 auto 30px;
`;

export const StyledItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & > div {
    margin-bottom: 30px;
  }
`;