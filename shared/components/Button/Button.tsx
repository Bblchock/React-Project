import { MuiButtonProps } from 'shared';

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
