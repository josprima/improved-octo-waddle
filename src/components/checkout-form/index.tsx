import Button from '@components/button';
import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const CheckoutFormWrapper = styled.div`
  background-color: ${COLOR.white};
  max-width: 1100px;
  flex-grow: 1;
  border-radius: 4px;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  position: relative;
  padding: 30px 20px 20px 40px;
`;

const IndicatorWrapper = styled.div`
  background-color: ${COLOR.secondary};
  padding: 20px 38px;
  border-radius: 35px;
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
`;

const CheckoutForm = () => {
  const { t } = useTranslation();

  return (
    <CheckoutFormWrapper>
      <IndicatorWrapper>Delivery</IndicatorWrapper>
      <Button text={t('continueToPayment')} />
    </CheckoutFormWrapper>
  );
};

export default CheckoutForm;
