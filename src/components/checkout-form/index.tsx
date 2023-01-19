import Button from '@components/button';
import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CheckoutSteps from './CheckoutSteps';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledCheckoutForm = styled.div`
  background-color: ${COLOR.white};
  max-width: 1100px;
  flex-grow: 1;
  border-radius: 4px;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  position: relative;
  padding: 30px 20px 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 50px 20px 20px;
  }
`;

const DEFAULT_CURRENT_STEP = 1;

const CheckoutForm = () => {
  const { t } = useTranslation();

  const [currentStep] = useState(DEFAULT_CURRENT_STEP);
  const [steps] = useState([
    {
      label: t('delivery'),
      id: 'step-1',
      backButtonText: t('backToCart'),
    },
    {
      label: t('payment'),
      id: 'step-2',
      backButtonText: t('backToDelivery'),
    },
    {
      label: t('finish'),
      id: 'step-3',
    },
  ]);

  return (
    <StyledCheckoutForm>
      <CheckoutSteps currentStep={currentStep} steps={steps} />

      {steps[currentStep - 1].backButtonText && (
        <Button
          style={{
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          variant="secondary"
        >
          <ArrowBackIcon sx={{ color: COLOR.textPrimary, fontSize: 18 }} />
          <span>{steps[currentStep - 1].backButtonText}</span>
        </Button>
      )}
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
