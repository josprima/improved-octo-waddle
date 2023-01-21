import BackButton from '@components/back-button';
import Text from '@components/text';
import { useCheckout } from '@contexts/CheckoutContext';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FinishStep = () => {
  const { handleOnFormSubmit } = useCheckout();

  return (
    <StyledContainer>
      <div>
        <Text variant="title" text="Thank you" />

        <BackButton onClick={handleOnFormSubmit} text="Go to homepage" />
      </div>
    </StyledContainer>
  );
};

export default FinishStep;
