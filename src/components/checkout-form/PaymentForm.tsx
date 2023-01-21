import Text from '@components/text';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaymentForm = () => {
  return (
    <StyledContainer>
      <div>
        <div style={{ marginBottom: '30px' }}>
          <Text text="Shipment" />
        </div>

        <div>
          <Text text="Payment" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default PaymentForm;
