import Button from '@components/button';
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

const PaymentForm = () => {
  const { handleOnFormSubmit } = useCheckout();

  return (
    <StyledContainer>
      <div>
        <div>
          <Text text="Shipment" />
          <Text text="Payment" />
        </div>
      </div>
      <StyledSummary>
        <Text text="Summary" variant="sub-title" />

        <Button onClick={handleOnFormSubmit}>
          <span>Pay with e-Wallet</span>
        </Button>
      </StyledSummary>
    </StyledContainer>
  );
};

export default PaymentForm;
