import Text from '@components/text';
import TextInput from '@components/text-input';
import _isEmpty from 'lodash/isEmpty';
import { useCheckout } from '@contexts/CheckoutContext';
import styled from 'styled-components';
import TextAreaInput from '@components/text-area-input';

const StyledFormTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

const DeliveryForm = () => {
  const { dirtyFields, errors, register } = useCheckout();

  return (
    <div>
      <StyledFormTitleWrapper>
        <Text text="Delivery Details" />
      </StyledFormTitleWrapper>

      <div>
        <TextInput
          id="email"
          label="Email"
          name="email"
          isError={!_isEmpty(errors.email) ? true : dirtyFields.email ? false : undefined}
          register={register}
          type="email"
          style={{ marginBottom: '10px' }}
        />

        <TextInput
          id="phoneNumber"
          label="Phone Number"
          name="phoneNumber"
          isError={
            !_isEmpty(errors.phoneNumber) ? true : dirtyFields.phoneNumber ? false : undefined
          }
          register={register}
          type="tel"
          style={{ marginBottom: '10px' }}
        />

        <TextAreaInput
          id="address"
          label="Delivery Address"
          name="address"
          isError={!_isEmpty(errors.address) ? true : dirtyFields.address ? false : undefined}
          register={register}
        />
      </div>
    </div>
  );
};

export default DeliveryForm;
