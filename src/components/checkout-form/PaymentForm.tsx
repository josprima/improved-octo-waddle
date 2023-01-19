import Button from '@components/button';
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

const PaymentForm = ({ onSubmit }: StepFormProps) => {
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

        <Button onClick={onSubmit}>
          <span>Pay with e-Wallet</span>
        </Button>
      </StyledSummary>
    </StyledContainer>
  );
};

export default PaymentForm;
