import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  CheckoutProviderProps,
  FormDataContextValueType,
  FormDataType,
  PersistedDataType,
} from './CheckoutContext.interfaces';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import generateRandomOrderID from '@utils/generate-random-order-id';

const DEFAULT_CURRENT_STEP = 1;
const DROPSHIPPING_FEE = 5900;
const GO_SEND_SHIPMENT_FEE = 15000;
const JNE_SHIPMENT_FEE = 9000;
const PERSONAL_COURIER_SHIPMENT_FEE = 29000;
const PHONE_NUMBER_REGEX = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;

const INITIAL_FORM_DATA: FormDataType = {
  address: '',
  dropshipperName: '',
  dropshipperPhoneNumber: '',
  email: '',
  phoneNumber: '',
  shipment: '',
  paymentType: '',
  sendAsDropshipper: false,
};

const INITIAL_CHECKOUT_DATA = {
  totalItem: 10,
  costOfGoods: 500000,
  dropshippingFee: 0,
  shipmentFee: 0,
  deliveryEstimation: '',
  orderID: generateRandomOrderID(),
};

const deliveryFormSchema = yup
  .object({
    address: yup.string().max(120).required(),
    email: yup.string().email(),
    phoneNumber: yup.string().min(6).max(20).matches(PHONE_NUMBER_REGEX),
  })
  .required();

const paymentFormSchema = yup
  .object({
    shipment: yup.string().required(),
    paymentType: yup.string().required(),
  })
  .required();

const dropshipperFormSchema = yup
  .object({
    dropshipperName: yup.string().required(),
    dropshipperPhoneNumber: yup.string().min(6).max(20).matches(PHONE_NUMBER_REGEX).required(),
  })
  .required();

const CheckoutContext = createContext<FormDataContextValueType | undefined>(undefined);

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const { t } = useTranslation();

  const [schema, setSchema] = useState<any>(deliveryFormSchema);
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

  const [checkoutData, setCheckoutData] = useState(INITIAL_CHECKOUT_DATA);

  const {
    register,
    formState: { errors, dirtyFields, isValid },
    getValues,
    reset,
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormDataType>({
    mode: 'all',
    defaultValues: INITIAL_FORM_DATA,
    resolver: yupResolver(schema),
  });

  watch('paymentType');
  watch('shipment');
  watch('address');

  const handleOnClickBack = () => {
    if (currentStep === 1) {
      return;
    }

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleOnFormSubmit = () => {
    if (currentStep === steps.length) {
      setCurrentStep(DEFAULT_CURRENT_STEP);
      setCheckoutData({
        ...INITIAL_CHECKOUT_DATA,
        orderID: generateRandomOrderID(),
      });
      reset();
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBeforeWindowUnload = () => {
    const formValues = getValues();

    const persistedCheckoutState = JSON.stringify({
      currentStep,
      checkoutData,
      formValues,
    });

    localStorage.setItem('persistedCheckoutState', persistedCheckoutState);
  };

  useEffect(() => {
    if (currentStep === 2) {
      setSchema(paymentFormSchema);
      return;
    }

    if (currentStep === 1 && getValues('sendAsDropshipper')) {
      setSchema(deliveryFormSchema.concat(dropshipperFormSchema));
    } else {
      setSchema(deliveryFormSchema);
    }
  }, [currentStep, getValues('sendAsDropshipper')]);

  useEffect(() => {
    if (getValues('sendAsDropshipper')) {
      setCheckoutData((prevCheckoutData) => ({
        ...prevCheckoutData,
        dropshippingFee: DROPSHIPPING_FEE,
      }));
    } else {
      setCheckoutData((prevCheckoutData) => ({
        ...prevCheckoutData,
        dropshippingFee: 0,
      }));
    }
  }, [getValues('sendAsDropshipper')]);

  useEffect(() => {
    const selectedShipment = getValues('shipment');

    let shipmentFee = 0;
    let deliveryEstimation = '';

    if (selectedShipment === 'GO-SEND') {
      shipmentFee = GO_SEND_SHIPMENT_FEE;
      deliveryEstimation = 'today';
    } else if (selectedShipment === 'JNE') {
      shipmentFee = JNE_SHIPMENT_FEE;
      deliveryEstimation = '2 days';
    } else if (selectedShipment === 'Personal Courier') {
      shipmentFee = PERSONAL_COURIER_SHIPMENT_FEE;
      deliveryEstimation = '1 day';
    }

    setCheckoutData((prevCheckoutData) => ({
      ...prevCheckoutData,
      shipmentFee,
      deliveryEstimation,
    }));
  }, [getValues('shipment')]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeWindowUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeWindowUnload);
    };
  }, [currentStep]);

  useEffect(() => {
    const persistedCheckoutState = localStorage.getItem('persistedCheckoutState');

    if (persistedCheckoutState) {
      const persistedData: PersistedDataType = JSON.parse(persistedCheckoutState);

      setCurrentStep(persistedData.currentStep);
      setCheckoutData(persistedData.checkoutData);

      Object.keys(persistedData.formValues).forEach((key) => {
        if (persistedData.formValues[key]) {
          setValue(key, persistedData.formValues[key], {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      });
    }
  }, []);

  const value = {
    register,
    errors,
    dirtyFields,
    isValid,
    getValues,
    handleOnFormSubmit: handleSubmit(handleOnFormSubmit),
    handleOnClickBack,
    steps,
    currentStep,
    checkoutData,
  };

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

const useCheckout = () => {
  const context = useContext(CheckoutContext);

  if (context === undefined) {
    throw new Error('useCheckout must be used within CheckoutProvider');
  }

  return context;
};

export { CheckoutProvider, useCheckout };
