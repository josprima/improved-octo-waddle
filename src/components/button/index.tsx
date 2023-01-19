import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { ButtonProps } from './Button.interfaces';

const StyledButton = styled.button`
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
  padding: 20px 34px;
  border: 0;
  cursor: pointer;
  transition: background-color linear 0.2s;

  &:hover {
    background-color: ${COLOR.primary_hover};
    transition: background-color linear 0.2s;
  }
`;

const Button = ({ text, type = 'button', onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
