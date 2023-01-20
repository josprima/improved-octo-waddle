import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { TextInputProps } from './TextInput.interfaces';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const StyledWrapper = styled.div<{ color: string }>`
  height: 60px;
  border: 1px solid ${(props) => props.color};
  position: relative;

  & > label {
    position: absolute;
    left: 15px;
    top: 18px;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.color};
    transition: all linear 0.2s;
  }

  & > input {
    width: 100%;
    height: 100%;
    padding: 30px 40px 15px 15px;
    outline: none;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    color: ${COLOR.textSecondary};

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

const TextInput = ({
  name,
  id,
  label,
  register,
  required = false,
  isError = undefined,
}: TextInputProps) => {
  const { color, icon } = getInputData(isError);

  return (
    <StyledWrapper color={color}>
      <input
        id={id}
        type="text"
        {...register(name, { required, minLength: 10 })}
        placeholder="fds"
      />

      <label htmlFor={id}>{label}</label>

      {icon}
    </StyledWrapper>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
