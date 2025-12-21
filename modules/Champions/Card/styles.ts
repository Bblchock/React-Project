import { MuiCard, styled, type MuiCardProps } from 'shared';

export interface CardProps extends MuiCardProps {
  rung: number;
  name: string;
  imgUrl: string;
}

const getFrameColor = (rung: CardProps['rung']) => {
  switch (rung) {
    case 5:
      return '#b30000';
    case 6:
      return '#6900be';
    case 7:
      return 'blue';
    default:
      return 'transparent';
  }
};

export const UiCard = styled(MuiCard, {
  shouldForwardProp: (prop) =>
    prop !== 'rung' && prop !== 'name' && prop !== 'imgUrl',
})<CardProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);

  border: ${(props) => `3px solid ${getFrameColor(props.rung)}`};
  border-radius: 15px;

  box-shadow: ${(props) => `0 0 20px 0 ${getFrameColor(props.rung)}`};
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 1390px) {
    margin: 5px;
    height: 270px;
    width: 190px;
  }

  @media (max-width: 1390px) {
    margin: 3px;
    height: 189px;
    width: 133px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 2000px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.22) 25%,
      rgba(255, 255, 255, 0.88) 50%,
      rgba(255, 255, 255, 0.22) 75%
    );
    transform: translateX(-500px);
  }

  &:hover:before {
    animation: shine 1.5s 1 linear 0.1s;
  }

  @keyframes shine {
    0% {
      transform: translateX(-400px);
    }
    100% {
      transform: translateX(200px);
    }
  }
`;

export const Img = styled('img')`
  grid-column: 1/3;
  grid-row: 1/9;

  height: 100%;
  width: 100%;
`;

export const Name = styled('p')`
  grid-column: 1/3;
  grid-row: 8;

  padding: 4px;
  background-color: rgba(0, 0, 0, 0.671);

  letter-spacing: 0;
  font-family: 'Rubik Mono One', sans-serif;
  color: rgb(230, 230, 230);

  @media (min-width: 1390px) {
    font-size: 20px;
    top: 83%;
  }

  @media (max-width: 1390px) {
    font-size: 15px;
    top: 80%;
  }

  @media (max-width: 990px) {
    font-size: 11px;
    top: 80%;
  }
`;
