import Button from '@components/button';
import Text from '@components/text';
import TextInput from '@components/text-input';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';
import { useCheckout } from '@contexts/CheckoutContext';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSummary = styled.div`
  flex-basis: 300px;
  padding: 30px 20px 20px;
`;

const DeliveryForm = () => {
  const { t } = useTranslation();

  const { dirtyFields, errors, register, handleOnFormSubmit } = useCheckout();

  return (
    <StyledContainer>
      <div>
        <div>
          <Text text="Delivery Details" />
        </div>

        <div>
          <TextInput
            required
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
          />
        </div>
      </div>
      <StyledSummary>
        <Text text="Summary" variant="sub-title" />

        <Button onClick={handleOnFormSubmit}>
          <span>{t('continueToPayment')}</span>
        </Button>
      </StyledSummary>
    </StyledContainer>
  );
};

export default DeliveryForm;
