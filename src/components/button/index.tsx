import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { ButtonProps, ButtonVariantType } from './Button.interfaces';

const StyledButton = styled.button<{ variant: ButtonVariantType }>`
  padding: 20px 34px;
  border: 0;
  cursor: pointer;
  transition: background-color linear 0.2s;
  font-weight: 500;
  background-color: ${(props) => (props.variant === 'primary' ? COLOR.primary : 'transparent')};
  color: ${(props) => (props.variant === 'primary' ? COLOR.white : COLOR.textPrimary)};

  &:active {
    background-color: ${(props) => props.variant === 'primary' && COLOR.primaryHover};
    color: ${(props) => props.variant === 'secondary' && COLOR.textSecondary};
    transition: all linear 0.2s;
  }
`;

const Button = ({
  type = 'button',
  onClick,
  children,
  style,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} type={type} onClick={onClick} style={{ ...style }}>
      {children}
    </StyledButton>
  );
};

export default Button;
