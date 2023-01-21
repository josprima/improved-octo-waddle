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
import formatCurrency from '@utils/format-currency';

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
  padding: 30px 20px 10px;
  border-left: 1px solid ${COLOR.borderOrangeLight};
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 940px) {
    flex-direction: column;
    border-left: 0;
    border-top: 1px solid ${COLOR.borderOrangeLight};
    min-height: 0;
    padding: 30px 0 20px;
  }
`;

const StyledLabelValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleSummaryItem = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 1px;
    background-color: ${COLOR.borderGreyLight};
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

  const renderSubmitButton = () => {
    let buttonTextElement = null;

    if (currentStep === 1) {
      buttonTextElement = <span>{t('continueToPayment')}</span>;
    } else if (currentStep === 2 && getValues('paymentType')) {
      buttonTextElement = <span>Pay with {getValues('paymentType')}</span>;
    }

    if (buttonTextElement) {
      return (
        <Button onClick={handleOnFormSubmit} style={{ width: '100%', marginTop: '30px' }}>
          {buttonTextElement}
        </Button>
      );
    }

    return null;
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
            <Text
              text={`${checkoutData.totalItem} ${
                checkoutData.totalItem > 1 ? 'items' : 'item'
              } purchased`}
            />

            {currentStep > 1 && checkoutData.deliveryEstimation && (
              <StyleSummaryItem>
                <Text
                  text="Delivery estimation"
                  style={{ marginBottom: '5px', color: COLOR.textSecondary }}
                />
                <Text
                  text={`${checkoutData.deliveryEstimation} by ${getValues('shipment')}`}
                  style={{ color: COLOR.borderGreen, fontSize: '16px', fontWeight: 700 }}
                />
              </StyleSummaryItem>
            )}

            {currentStep === 3 && (
              <StyleSummaryItem>
                <Text
                  text="Payment method"
                  style={{ marginBottom: '5px', color: COLOR.textSecondary }}
                />
                <Text
                  text={getValues('paymentType')}
                  style={{ color: COLOR.borderGreen, fontSize: '16px', fontWeight: 700 }}
                />
              </StyleSummaryItem>
            )}
          </div>

          <div>
            <div>
              <StyledLabelValue style={{ marginBottom: '12px' }}>
                <Text text="Cost of goods" />
                <Text variant="label-value" text={formatCurrency(checkoutData.costOfGoods)} />
              </StyledLabelValue>

              {getValues('sendAsDropshipper') && (
                <StyledLabelValue style={{ marginBottom: '12px' }}>
                  <Text text="Dropshipping Fee" />
                  <Text variant="label-value" text={formatCurrency(checkoutData.dropshippingFee)} />
                </StyledLabelValue>
              )}

              {getValues('shipment') && (
                <StyledLabelValue>
                  <Text text={`<b>${getValues('shipment')}</b> shipment`} />
                  <Text variant="label-value" text={formatCurrency(checkoutData.shipmentFee)} />
                </StyledLabelValue>
              )}
            </div>

            <StyledLabelValue style={{ marginTop: '25px' }}>
              <Text text="Total" variant="sub-title" />
              <Text
                text={formatCurrency(
                  checkoutData.costOfGoods +
                    checkoutData.dropshippingFee +
                    checkoutData.shipmentFee,
                )}
                variant="sub-title"
              />
            </StyledLabelValue>

            {renderSubmitButton()}
          </div>
        </StyledSummary>
      </StyledStepWrapper>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
