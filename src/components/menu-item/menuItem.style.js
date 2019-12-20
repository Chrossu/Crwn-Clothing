import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  height: ${(({ size }) => size === 'large' ? '380px' : '240px')}
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  min-width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.7;
  background: #fff;

  ${StyledMenuItem}:hover & {
    opacity: 0.8;
  }
`;

export const StyledImage = styled.div`
  position: absolute;
  background: url('${(({ imageUrl }) => imageUrl)}') center center/cover;
  height: 100%;
  width: 100%;

  ${StyledMenuItem}:hover & {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 1.4rem;
  color: #4a4a4a;
`;

export const StyledSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;