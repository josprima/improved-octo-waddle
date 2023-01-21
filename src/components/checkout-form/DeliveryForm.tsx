import Text from '@components/text';
import TextInput from '@components/text-input';
import _isEmpty from 'lodash/isEmpty';
import { useCheckout } from '@contexts/CheckoutContext';
import styled from 'styled-components';
import TextAreaInput from '@components/text-area-input';
import CheckboxInput from '@components/checkbox-input';

const StyledFormTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  justify-content: space-between;
`;

const StyledForm = styled.div`
  display: flex;
`;

const StyledDeliveryForm = styled.div`
  flex-basis: 400px;
  flex-grow: 2;
  transition: all ease 0.2s;
`;

const StyledDropshipperForm = styled.div`
  flex-basis: 300px;
  transition: all ease 0.2s;
  margin-left: 30px;
  flex-grow: 1;
`;

const DeliveryForm = () => {
  const { dirtyFields, errors, register, getValues } = useCheckout();

  return (
    <div>
      <StyledFormTitleWrapper>
        <Text text="Delivery Details" />

        <CheckboxInput label="Send as dropshipper" name="sendAsDropshipper" register={register} />
      </StyledFormTitleWrapper>

      <StyledForm>
        <StyledDeliveryForm>
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
        </StyledDeliveryForm>

        {getValues('sendAsDropshipper') && (
          <StyledDropshipperForm>
            <TextInput
              id="dropshipperName"
              label="Dropshipper name"
              name="dropshipperName"
              isError={
                !_isEmpty(errors.dropshipperName)
                  ? true
                  : dirtyFields.dropshipperName
                  ? false
                  : undefined
              }
              register={register}
              type="text"
              style={{ marginBottom: '10px' }}
            />

            <TextInput
              id="dropshipperPhoneNumber"
              label="Dropshipper phone number"
              name="dropshipperPhoneNumber"
              isError={
                !_isEmpty(errors.dropshipperPhoneNumber)
                  ? true
                  : dirtyFields.dropshipperPhoneNumber
                  ? false
                  : undefined
              }
              register={register}
              type="text"
            />
          </StyledDropshipperForm>
        )}
      </StyledForm>
    </div>
  );
};

export default DeliveryForm;
