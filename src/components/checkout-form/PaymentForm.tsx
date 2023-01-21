import SelectInput from '@components/select-input';
import Text from '@components/text';
import { useCheckout } from '@contexts/CheckoutContext';

const PaymentForm = () => {
  const { register } = useCheckout();

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <Text variant="title" text="Shipment" style={{ marginBottom: '30px' }} />

        <SelectInput
          name="shipment"
          options={[
            {
              label: 'GO-SEND',
              value: 'GO-SEND',
              valueLabel: '15,000',
            },
            {
              label: 'JNE',
              value: 'JNE',
              valueLabel: '9,000',
            },
            {
              label: 'Personal Courier',
              value: 'Personal Courier',
              valueLabel: '29,000',
            },
          ]}
          register={register}
        />
      </div>

      <div>
        <Text variant="title" text="Payment" style={{ marginBottom: '30px' }} />

        <SelectInput
          name="paymentType"
          options={[
            {
              label: 'e-Wallet',
              value: 'e-Wallet',
              valueLabel: '1,500,000 left',
            },
            {
              valueLabel: 'Bank Transfer',
              value: 'Bank Transfer',
            },
            {
              valueLabel: 'Virtual Account',
              value: 'Virtual Account',
            },
          ]}
          register={register}
        />
      </div>
    </div>
  );
};

export default PaymentForm;
