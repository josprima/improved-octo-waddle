import { COLOR } from '@constants/themes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import StepItem from './StepItem';

const StyledCheckoutSteps = styled.div`
  background-color: ${COLOR.secondary};
  padding: 20px 38px;
  border-radius: 35px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  max-width: 100%;
  overflow-x: auto;
`;

const DEFAULT_CURRENT_STEP = 1;

const CheckoutSteps = () => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(DEFAULT_CURRENT_STEP);
  const [steps] = useState([
    {
      label: t('delivery'),
      id: 'step-1',
    },
    {
      label: t('payment'),
      id: 'step-2',
    },
    {
      label: t('finish'),
      id: 'step-3',
    },
  ]);

  useEffect(() => {
    document.getElementById(`step-${currentStep}`)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [currentStep]);

  return (
    <>
      <StyledCheckoutSteps>
        {steps.map((step, index) => {
          const itemSequence = index + 1;

          return (
            <StepItem
              key={step.id}
              sequence={itemSequence}
              showArrowIcon={itemSequence < steps.length}
              active={itemSequence <= currentStep}
              label={step.label}
              id={step.id}
            />
          );
        })}
      </StyledCheckoutSteps>
      <button
        onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
        type="button"
      >
        Next step
      </button>

      <button
        onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
        type="button"
      >
        Previouse step
      </button>
    </>
  );
};

export default CheckoutSteps;
