interface StepsProps {
    currentStep:number;
}

export function Steps({ currentStep }: StepsProps) {
    const totalSteps = 3; 
  
    const isStepActive = (step: number) => {
      return step === currentStep;
    };
  
    const getStepBackground = (step: number) => {
      return isStepActive(step) ? "bg-blue-500" : "bg-gray-300";
    };
  
    const renderStep = (stepNumber: number, label: string) => {
        if (stepNumber > totalSteps) {
            return null; 
        }
        return (
            <li className="flex items-center gap-2 bg-white p-2" key={stepNumber}>
            <span
                className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold text-white  ${getStepBackground(
                stepNumber
                )}`}
            >
                {stepNumber}
            </span>
            <span className="hidden sm:block">{label}</span>
            </li>
        );
    };
  
    const renderSteps = () => {
      const steps = [];
  
      for (let i = 1; i <= totalSteps; i++) {
        steps.push(renderStep(i, getStepLabel(i)));
      }
  
      return steps;
    };
  
    const getStepLabel = (step: number) => {
      switch (step) {
        case 1:
          return "Details";
        case 2:
          return "Address";
        case 3:
          return "Social profiles";
        default:
          return "";
      }
    };
  
    return (
      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {renderSteps()}
        </ol>
      </div>
    );
  }
  