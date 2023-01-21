import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import { SelectInputProps } from './SelectInput.interfaces';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledSelectInput = styled.div`
  flex-basis: 180px;
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

      & ~ .text-content {
        & > .text-content__value,
        & > .text-content__label {
          color: ${COLOR.textSecondary};
        }
      }
    }
  }

  .text-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    padding: 12px 15px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__label {
      color: ${COLOR.textPrimary};
      font-size: 13px;
      font-weight: normal;
    }

    &__value {
      color: ${COLOR.textPrimary};
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const SelectInput = ({ options, register, name, style }: SelectInputProps) => {
  return (
    <StyledWrapper style={style}>
      {options.map((option) => (
        <StyledSelectInput key={option.value}>
          <input type="radio" value={option.value} {...register(name)} />

          <CheckIcon sx={{ fontSize: 18 }} />

          <div className="text-content">
            <span className="text-content__label">{option.label}</span>
            <span className="text-content__value">{option.valueLabel}</span>
          </div>
        </StyledSelectInput>
      ))}
    </StyledWrapper>
  );
};

export default SelectInput;
