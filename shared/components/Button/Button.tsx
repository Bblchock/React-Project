import { type MuiButtonProps } from '../external';

import { UiButton } from './styles';

export interface ButtonProps extends MuiButtonProps {
  onClick?: () => void;
  className?: string;
  isActive: boolean;
}

export const Button = ({ children, isActive, ...props }: ButtonProps) => {
  return (
    <UiButton
      variant="contained"
      size="small"
      fullWidth
      isActive={isActive}
      aria-pressed={isActive}
      {...props}
    >
      {children}
    </UiButton>
  );
};
