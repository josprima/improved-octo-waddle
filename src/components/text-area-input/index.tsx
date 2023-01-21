import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { TextAreaInputProps } from './TextAreaInput.interfaces';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const StyledInputWrapper = styled.div<{ color: string }>`
  height: 120px;
  border: 1px solid ${(props) => props.color};
  position: relative;

  & > label {
    position: absolute;
    left: 15px;
    top: 18px;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.color};
    transition: all linear 0.1s;
  }

  & > textarea {
    width: 100%;
    height: 100%;
    padding: 30px 40px 15px 15px;
    outline: none;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    color: ${COLOR.textSecondary};
    resize: none;

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: 6px;
      font-size: 13px;
      transition: all linear 0.2s;
    }

    ::placeholder {
      color: transparent;
    }
  }

  & > svg {
    position: absolute;
    right: 15px;
    top: 18px;
    color: ${(props) => props.color};
    pointer-events: none;
  }
`;

const getInputData = (isError: boolean | undefined) => {
  if (isError === undefined) {
    return { color: COLOR.border, icon: null };
  }

  if (isError === true) {
    return { color: COLOR.borderOrange, icon: <ClearIcon sx={{ fontSize: 18 }} /> };
  }

  return { color: COLOR.borderGreen, icon: <CheckIcon sx={{ fontSize: 18 }} /> };
};

const TextAreaInput = ({
  name,
  id,
  label,
  register,
  isError = undefined,
  style,
}: TextAreaInputProps) => {
  const { color, icon } = getInputData(isError);

  return (
    <StyledInputWrapper color={color} style={style}>
      <textarea id={id} {...register(name)} placeholder={label}></textarea>

      <label htmlFor={id}>{label}</label>

      {icon}
    </StyledInputWrapper>
  );
};

export default TextAreaInput;
