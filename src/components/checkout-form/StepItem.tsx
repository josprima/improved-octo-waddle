import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { StepItemProps } from './Checkout.interfaces';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const StyledStepItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSequence = styled.span<{ active: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? COLOR.white : COLOR.primary)};
  background-color: ${(props) => (props.active ? COLOR.primary : 'rgba(255, 138, 0, 0.2)')};
  font-weight: 500;
  margin-right: 10px;
  font-size: 16px;
  transition: all linear 0.2s;
`;

const StyledLabel = styled.span`
  color: ${COLOR.primary};
  font-weight: 500;
  font-size: 16px;
`;

const StepItem = ({
  active = false,
  label,
  showArrowIcon = false,
  sequence,
  id,
}: StepItemProps) => {
  return (
    <StyledStepItem id={id}>
      <StyledSequence active={active}>{sequence}</StyledSequence>

      <StyledLabel>{label}</StyledLabel>

      {showArrowIcon && (
        <KeyboardArrowRightIcon sx={{ fontSize: 24, color: COLOR.primary, marginLeft: '25px' }} />
      )}
    </StyledStepItem>
  );
};

export default StepItem;
