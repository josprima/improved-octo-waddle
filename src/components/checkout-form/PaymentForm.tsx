import SelectInput from '@components/select-input';
import Text from '@components/text';
import { useCheckout } from '@contexts/CheckoutContext';

const PaymentForm = () => {
  const { register } = useCheckout();

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <Text text="Shipment" style={{ marginBottom: '30px' }} />

        <SelectInput
          name="shipment"
          options={[
            {
              label: 'GO-SEND',
              value: 'gosend',
              valueLabel: '15,000',
            },
            {
              label: 'JNE',
              value: 'jne',
              valueLabel: '9,000',
            },
            {
              label: 'Personal Courier',
              value: 'personalCourier',
              valueLabel: '29,000',
            },
          ]}
          register={register}
        />
      </div>

      <div>
        <Text text="Payment" style={{ marginBottom: '30px' }} />

        <SelectInput
          name="paymentType"
          options={[
            {
              label: 'e-Wallet',
              value: 'eWallet',
              valueLabel: '1,500,000 left',
            },
            {
              valueLabel: 'Bank Transfer',
              value: 'bankTransfer',
            },
            {
              valueLabel: 'Virtual Account',
              value: 'virtualAccount',
            },
          ]}
          register={register}
        />
      </div>
    </div>
  );
};

export default PaymentForm;
