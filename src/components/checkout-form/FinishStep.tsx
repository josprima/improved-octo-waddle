import BackButton from '@components/back-button';
import Text from '@components/text';
import { useCheckout } from '@contexts/CheckoutContext';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FinishStep = () => {
  const { handleOnFormSubmit, checkoutData, getValues } = useCheckout();

  return (
    <StyledContainer>
      <div>
        <Text variant="title" text="Thank you" style={{ marginBottom: '26px' }} />
        <Text text={`Order ID : ${checkoutData.orderID}`} style={{ marginBottom: '10px' }} />
        <Text
          text={`Your order will delivered ${checkoutData.deliveryEstimation} with ${getValues(
            'shipment',
          )}`}
          style={{ marginBottom: '60px' }}
        />

        <BackButton onClick={handleOnFormSubmit} text="Go to homepage" />
      </div>
    </StyledContainer>
  );
};

export default FinishStep;
