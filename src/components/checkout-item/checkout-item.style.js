import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1.3rem;
  align-items: center;
`;

export const StyledImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledItem = styled.span`
  width: 23%;
`;

export const StyledQuantityItem = styled(StyledItem)`
  display: flex;
  user-select: none;

  div {
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const StyledRemove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;