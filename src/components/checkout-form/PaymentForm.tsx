import SelectInput from '@components/select-input';
import Text from '@components/text';
import { useCheckout } from '@contexts/CheckoutContext';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaymentForm = () => {
  const { register } = useCheckout();

  return (
    <StyledContainer>
      <div>
        <div style={{ marginBottom: '30px' }}>
          <Text text="Shipment" style={{ marginBottom: '30px' }} />

          <SelectInput
            name="shipment"
            options={[
              {
                label: 'gosend',
                value: 'gosend',
              },
              {
                label: 'jne',
                value: 'jne',
              },
              {
                label: 'personalCourier',
                value: 'personalCourier',
              },
            ]}
            register={register}
          />
        </div>

        <div>
          <Text text="Payment" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default PaymentForm;
