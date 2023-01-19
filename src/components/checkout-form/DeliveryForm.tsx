import Button from '@components/button';
import Text from '@components/text';
import { useTranslation } from 'react-i18next';
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

const DeliveryForm = ({ onSubmit }: StepFormProps) => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <div>
        <div>
          <Text text="Delivery Details" />
        </div>
      </div>
      <StyledSummary>
        <Text text="Summary" variant="sub-title" />

        <Button onClick={onSubmit}>
          <span>{t('continueToPayment')}</span>
        </Button>
      </StyledSummary>
    </StyledContainer>
  );
};

export default DeliveryForm;
