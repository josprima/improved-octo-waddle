import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import CheckoutSteps from './CheckoutSteps';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import BackButton from '@components/back-button';
import FinishStep from './FinishStep';
import { useCheckout } from '@contexts/CheckoutContext';
import Text from '@components/text';
import Button from '@components/button';
import { useTranslation } from 'react-i18next';
import format from '@utils/currency';

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
  display: flex;
  gap: 30px;

  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

const StyledSummary = styled.div`
  flex-basis: 300px;
  padding: 30px 20px 20px;
  border-left: 1px solid ${COLOR.primary};
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 940px) {
    flex-direction: column;
    border-left: 0;
    border-top: 1px solid ${COLOR.primary};
    min-height: 0;
    padding: 30px 0 20px;
  }
`;

const CheckoutForm = () => {
  const { t } = useTranslation();
  const { currentStep, steps, handleOnClickBack, handleOnFormSubmit, checkoutData, getValues } =
    useCheckout();

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

      <StyledStepWrapper>
        <div style={{ flexGrow: 1 }}>{renderFormStep()}</div>

        <StyledSummary>
          <div>
            <Text text="Summary" variant="sub-title" style={{ marginBottom: '10px' }} />
            <Text text="10 items purchased" />
          </div>

          <div>
            <div>
              <div>
                <span>Cost of goods</span>
                <span>{format(checkoutData.costOfGoods)}</span>
              </div>

              {getValues('sendAsDropshipper') && (
                <div>
                  <span>Dropshipping Fee</span>
                  <span>{format(checkoutData.dropshippingFee)}</span>
                </div>
              )}
            </div>

            <div>
              <Text text="Total" variant="sub-title" />
              <Text text="" variant="sub-title" />
            </div>

            <Button onClick={handleOnFormSubmit} style={{ width: '100%' }}>
              <span>{t('continueToPayment')}</span>
            </Button>
          </div>
        </StyledSummary>
      </StyledStepWrapper>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
