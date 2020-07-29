import styled, { keyframes } from 'styled-components';

const round = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    margin-top: 30px;
    align-self: center;
    animation: ${round} 1s linear infinite;
  }
`;
