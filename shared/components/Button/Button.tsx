import { type MuiButtonProps } from '../external';

import { UiButton } from './styles';

export interface ButtonProps extends MuiButtonProps {
  onClick?: () => void;
  className?: string;
  isActive: boolean;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <UiButton variant="contained" size="small" fullWidth {...props}>
      {children}
    </UiButton>
  );
};
