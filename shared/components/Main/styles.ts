import { styled } from '../external';

export const UiMain = styled('main')`
  margin: ${({ theme }) => theme.spacing(9, 'auto')};
  width: 80%;

  @media (max-width: 2000px) {
    width: 1002px;
  }

  @media (max-width: 1390px) {
    width: 697px;
  }

  & li {
    margin-left: 20px;
  }
`;
