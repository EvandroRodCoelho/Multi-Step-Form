interface StepsProps {
    currentStep:number;
}

export function Steps({currentStep}:StepsProps) {


    const isStepActive = (step:number) => {
      return step === currentStep;
    };
  
    const getStepBackground = (step:number) => {
      return isStepActive(step) ? "bg-blue-500" : "bg-gray-300";
    };

    return (
        <div
        className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
    >
        <ol
        className="relative z-10 flex justify-between text-sm font-medium text-gray-500"
        >
        <li className="flex items-center gap-2 bg-white p-2">
        <span
        className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold text-white  ${getStepBackground(
            1
          )}`} >
            1
            </span>

            <span className="hidden sm:block"> Details </span>
        </li>

        <li className="flex items-center gap-2 bg-white p-2">
            <span
        className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold text-white  ${getStepBackground(
            2
          )}`}
            >
            2
            </span>

            <span className="hidden sm:block"> Address </span>
        </li>

        <li className="flex items-center gap-2 bg-white p-2">
            <span
            className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold text-white  ${getStepBackground(
                3
            )}`}
            >
            3
            </span>

            <span className="hidden sm:block"> Plan </span>
        </li>
        </ol>
    </div>
    );
}