import BackButton from '@components/back-button';
import Text from '@components/text';
import { useCheckout } from '@contexts/CheckoutContext';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSummary = styled.div`
  flex-basis: 300px;
  padding: 30px 20px 20px;
`;

const FinishStep = () => {
  const { handleOnFormSubmit } = useCheckout();

  return (
    <StyledContainer>
      <div>
        <Text text="Thank you" />

        <BackButton onClick={handleOnFormSubmit} text="Go to homepage" />
      </div>
      <StyledSummary>
        <Text text="Summary" variant="sub-title" />
      </StyledSummary>
    </StyledContainer>
  );
};

export default FinishStep;
