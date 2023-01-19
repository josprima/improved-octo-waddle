export interface StepItemProps {
  label: string;
  active?: boolean;
  id: string;
  sequence?: number;
  showArrowIcon?: boolean;
}

export interface CheckoutStepsProps {
  steps: StepItemProps[];
  currentStep: number;
}
