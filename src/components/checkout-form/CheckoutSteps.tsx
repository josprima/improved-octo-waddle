import { COLOR } from '@constants/themes';
import { useEffect } from 'react';
import styled from 'styled-components';
import StepItem from './StepItem';
import { CheckoutStepsProps } from './Checkout.interfaces';

const StyledCheckoutStepsContainer = styled.div`
  padding: 0 20px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100%;
`;

const StyledCheckoutSteps = styled.div`
  background-color: ${COLOR.secondary};
  padding: 20px 38px;
  border-radius: 35px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
`;

const CheckoutSteps = ({ steps, currentStep }: CheckoutStepsProps) => {
  useEffect(() => {
    document.getElementById(`step-${currentStep}`)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [currentStep]);

  return (
    <StyledCheckoutStepsContainer>
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
    </StyledCheckoutStepsContainer>
  );
};

export default CheckoutSteps;
