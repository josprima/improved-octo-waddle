import CheckoutForm from '@components/checkout-form';
import { COLOR } from '@constants/themes';
import { CheckoutProvider } from '@contexts/CheckoutContext';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: ${COLOR.secondary};
  width: 100%;
  height: 100%;
  padding-top: 55px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

function App() {
  return (
    <AppWrapper>
      <CheckoutProvider>
        <CheckoutForm />
      </CheckoutProvider>
    </AppWrapper>
  );
}

export default App;
