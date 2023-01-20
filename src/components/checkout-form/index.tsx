import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import CheckoutSteps from './CheckoutSteps';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import BackButton from '@components/back-button';
import FinishStep from './FinishStep';
import { useCheckout } from '@contexts/CheckoutContext';

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

const CheckoutForm = () => {
  const { currentStep, steps, handleOnClickBack } = useCheckout();

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <DeliveryForm />;

      case 2:
        return <PaymentForm />;

      case 3:
        return <FinishStep />;

      default:
        return null;
    }
  };

  const backButtonText = steps[currentStep - 1].backButtonText;

  return (
    <StyledCheckoutForm>
      <CheckoutSteps currentStep={currentStep} steps={steps} />

      {backButtonText && <BackButton onClick={handleOnClickBack} text={backButtonText} />}

      <StyledStepWrapper>{renderFormStep()}</StyledStepWrapper>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
