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
  gap: 30px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

const StyledForm = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;

const StyledDeliveryForm = styled.div`
  flex-grow: 2;
  flex-basis: 100px;
`;

const StyledDropshipperForm = styled.div`
  flex-grow: 1;
  flex-basis: 100px;
`;

const DeliveryForm = () => {
  const { dirtyFields, errors, register, getValues } = useCheckout();

  return (
    <div>
      <StyledFormTitleWrapper>
        <Text variant="title" text="Delivery Details" />

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
            charLength={getValues('address').length}
            maxCharLength={120}
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
