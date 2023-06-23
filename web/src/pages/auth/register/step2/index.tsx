import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

export function Step2() {
  const currentStep = 2;

  const isStepActive = (step:number) => {
    return step === currentStep;
  };

  const getStepBackground = (step:number) => {
    return isStepActive(step) ? "bg-blue-500" : "bg-gray-300";
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-4 my-4">
        <Link
            to="/register/step1"
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getStepBackground(
            1
          )}`}
        >
          1
        </Link>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getStepBackground(
            2
          )}`}
        >
          2
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-not-allowed text-white ${getStepBackground(
            3
          )}`}
        >
          3
        </div>
      </div>
      <header className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Address Information</h1>
      </header>

      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="cep" className="sr-only">
            CEP
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              id="cep"
              placeholder="Enter CEP"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn className="h-4 w-4 text-gray-400" />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              id="city"
              placeholder="Enter city"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn className="h-4 w-4 text-gray-400" />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              id="country"
              placeholder="Enter country"
            />
          </div>
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn className="h-4 w-4 text-gray-400" />
            </span>
        </div>

        <div>
          <label htmlFor="state" className="sr-only">
            State
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              id="state"
              placeholder="Enter state"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn className="h-4 w-4 text-gray-400" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to="/register/step1"
            className="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
          >
            Previous step
          </Link>
          <Link
            to="/register/step3"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Next step
          </Link>
        </div>
      </form>
    </div>
  );
}
