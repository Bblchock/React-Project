import { styled } from '../external';

export const ErrorContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 24px;
  text-align: center;
`;

export const ErrorTitle = styled('h2')`
  color: #d32f2f;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled('p')`
  color: #666;
  margin-bottom: 16px;
`;

export const RetryButton = styled('button')`
  padding: 8px 16px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #1565c0;
  }
`;
