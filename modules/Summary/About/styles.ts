import { styled } from 'shared';

export const Image = styled('img')`
  float: right;
  width: 40%;
  margin: 8px;
  border: 1px solid #000000;
  border-radius: 25px;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.02);
  }
`;
