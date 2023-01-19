import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CheckoutSteps from './CheckoutSteps';
import { useState } from 'react';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import BackButton from '@components/back-button';
import FinishStep from './FinishStep';

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

const StyledStepWrapper = styled.div`
  margin-top: 20px;
`;

const DEFAULT_CURRENT_STEP = 1;

const CheckoutForm = () => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(DEFAULT_CURRENT_STEP);
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

  const handleOnClickBack = () => {
    if (currentStep === 1) {
      return;
    }

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormOnSubmit = () => {
    if (currentStep === steps.length) {
      setCurrentStep(DEFAULT_CURRENT_STEP);
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <DeliveryForm onSubmit={handleFormOnSubmit} />;

      case 2:
        return <PaymentForm onSubmit={handleFormOnSubmit} />;

      case 3:
        return <FinishStep onSubmit={handleFormOnSubmit} />;

      default:
        return null;
    }
  };

  return (
    <StyledCheckoutForm>
      <CheckoutSteps currentStep={currentStep} steps={steps} />

      {steps[currentStep - 1].backButtonText && (
        <BackButton
          onClick={handleOnClickBack}
          text={steps[currentStep - 1].backButtonText}
        />
      )}

      <StyledStepWrapper>{renderFormStep()}</StyledStepWrapper>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
