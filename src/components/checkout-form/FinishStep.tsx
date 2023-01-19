import BackButton from '@components/back-button';
import Text from '@components/text';
import styled from 'styled-components';
import { StepFormProps } from './Checkout.interfaces';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSummary = styled.div`
  flex-basis: 300px;
  padding: 30px 20px 20px;
`;

const FinishStep = ({ onSubmit }: StepFormProps) => {
  return (
    <StyledContainer>
      <div>
        <Text text="Thank you" />

        <BackButton onClick={onSubmit} text="Go to homepage" />
      </div>
      <StyledSummary>
        <Text text="Summary" variant="sub-title" />
      </StyledSummary>
    </StyledContainer>
  );
};

export default FinishStep;
