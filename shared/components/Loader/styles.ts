import { styled } from 'shared';

const setAnimationWithDelay = (delay: string): string => {
  return `loader-size 1.5s infinite linear alternate ${delay}s,
      loader-color 1.5s infinite linear alternate ${delay}s,
      loader-spin 1.5s infinite linear ${delay}s`;
};

export const UILoader = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;

  & div {
    margin: ${({ theme }) => theme.spacing(1)};
    border-radius: 40%;
  }

  & :nth-of-type(1) {
    animation: ${setAnimationWithDelay('0.1')};
  }

  & :nth-of-type(2) {
    animation: ${setAnimationWithDelay('0.15')};
  }

  & :nth-of-type(3) {
    animation: ${setAnimationWithDelay('0.2')};
  }

  @keyframes loader-size {
    0% {
      height: 15px;
      width: 15px;
    }
    50% {
      height: 25px;
      width: 25px;
    }
    100% {
      height: 15px;
      width: 15px;
    }
  }

  @keyframes loader-color {
    0% {
      background-color: rgb(0, 177, 0);
    }
    50% {
      background-color: rgb(172, 73, 185);
    }
    100% {
      background-color: rgb(90, 92, 224);
    }
  }

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
