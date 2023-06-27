import { Link, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Steps } from "../../../../components/register/steps";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const AddressInformationSchema = z.object({
  zipCode:z.string().nonempty("Zip Code is required"), 
  city:z.string().nonempty("City is required"),
  country:z.string().nonempty("Country is required"),
  state:z.string().nonempty("State is required"),
})
type AddressInformationData = z.infer <typeof AddressInformationSchema>;

export function Step2() {

  const {register, handleSubmit, formState:{errors} } = useForm<AddressInformationData>({
      resolver: zodResolver(AddressInformationSchema),
  });

  const navigate = useNavigate();
  function handleSubmitToStep3(data:AddressInformationData): void { 
      event?.preventDefault();
      console.log(data);
      navigate("/register/step3");
  }



  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Steps  currentStep={2}/>
      <header className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Address Information</h1>
      </header>

      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4"  onSubmit={handleSubmit(handleSubmitToStep3)}>
        <div>
          <label htmlFor="zipCode" className="sr-only">
            Zip Code
          </label>
          <div className="relative">
            <input
              type="text"
              data-error={errors.zipCode}
              className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
              id="zipCode"
              placeholder="Enter Zip Code" 
              {...register("zipCode")}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn 
                data-error={errors.zipCode}
                className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`}  />
            </span>
          </div>
          {errors.zipCode  && <p className="text-sm text-red-500 ">{errors.zipCode.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <div className="relative">
            <input
              type="text"
              data-error={errors.city}
              className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
              id="city"
              placeholder="Enter city"
              {...register("city")}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn 
                data-error={errors.city}
                className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`} />
            </span>
          </div>
          {errors.city && <p className="text-sm text-red-500 ">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <div className="relative">
            <input
              type="text"
              data-error={errors.country}
              className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
              id="country"
              placeholder="Enter country"
              {...register("country")}
            />        
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn 
                data-error={errors.country}
                className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`} />
              </span>
            </div>
            {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
        </div>

        <div>
          <label htmlFor="state" className="sr-only">
            State
          </label>
          <div className="relative">
            <input
              type="text"
              data-error={errors.state}
              className={`w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
              id="state"
              placeholder="Enter state"
              {...register("state")}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <CiLocationOn 
                  data-error={errors.state}
                  className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`} />
            </span>
          </div>
          {errors.state && <p className="text-sm text-red-500 ">{errors.state.message}</p>}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to="/register/step1"
            className="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
          >
            Previous step
          </Link>
          <button 
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Next step
          </button>
        </div>
      </form>
    </div>
  );
}
