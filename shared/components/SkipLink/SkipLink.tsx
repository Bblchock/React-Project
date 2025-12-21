import { styled } from '@mui/material';

const Link = styled('a')`
  position: absolute;
  left: -9999px;
  z-index: 9999;
  padding: 12px 24px;
  background: #1976d2;
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:focus {
    left: 8px;
    top: 8px;
  }
`;

export const SkipLink = () => (
  <Link href="#main-content">Перейти к основному содержимому</Link>
);
