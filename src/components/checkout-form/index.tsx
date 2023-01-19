import Button from '@components/button';
import { COLOR } from '@constants/themes';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CheckoutSteps from './CheckoutSteps';

const StyledCheckoutForm = styled.div`
  background-color: ${COLOR.white};
  max-width: 1100px;
  flex-grow: 1;
  border-radius: 4px;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  position: relative;
  padding: 30px 20px 20px 40px;
`;

const CheckoutForm = () => {
  const { t } = useTranslation();

  return (
    <StyledCheckoutForm>
      <CheckoutSteps />
      <Button text={t('continueToPayment')} />
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
