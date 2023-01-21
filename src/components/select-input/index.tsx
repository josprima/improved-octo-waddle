import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import { SelectInputProps } from './SelectInput.interfaces';

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledSelectInput = styled.label`
  width: 180px;
  height: 60px;
  position: relative;

  > input[type='radio'] {
    cursor: pointer;
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${COLOR.border};
    background-color: ${COLOR.white};

    & + svg {
      display: none;
      position: absolute;
      right: 15px;
      top: 18px;
      color: ${COLOR.borderGreen};
    }

    &:checked {
      border-width: 2px;
      border-color: ${COLOR.borderGreen};
      background-color: ${COLOR.backgroundGreen};

      & + svg {
        display: block;
      }
    }
  }
`;

const SelectInput = ({ options, register, name, style }: SelectInputProps) => {
  return (
    <StyledWrapper style={style}>
      {options.map((option) => (
        <StyledSelectInput key={option.value}>
          <input type="radio" {...register(name)} />

          <CheckIcon sx={{ fontSize: 18 }} />

          {option.label}
        </StyledSelectInput>
      ))}
    </StyledWrapper>
  );
};

export default SelectInput;
