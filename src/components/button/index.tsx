import { ButtonProps } from './Button.interfaces';

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
