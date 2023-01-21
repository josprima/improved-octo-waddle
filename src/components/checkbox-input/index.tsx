import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { CheckboxInputProps } from './CheckboxInput.interfaces';
import CheckIcon from '@mui/icons-material/Check';

const StyledCheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  user-select: none;

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;

    :checked {
      ~ .icon svg {
        opacity: 1;
      }
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    border: 2px solid ${COLOR.borderGreen};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      color: ${COLOR.borderGreen};
      opacity: 0;
    }
  }
`;

const CheckboxInput = ({ name, label, register, style }: CheckboxInputProps) => {
  return (
    <StyledCheckboxWrapper style={style}>
      {label}

      <input type="checkbox" {...register(name)} />

      <div className="icon">
        <CheckIcon sx={{ fontSize: 18 }} />
      </div>
    </StyledCheckboxWrapper>
  );
};

export default CheckboxInput;
