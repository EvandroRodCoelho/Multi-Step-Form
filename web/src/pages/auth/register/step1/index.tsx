import { AiOutlineEye, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Steps } from "../../../../components/register/steps";
import { useStep1 } from "./useStep1";
import { Link } from "react-router-dom";


export function Step1() {
    const {errors,handleSubmit, handleSubmitNextStep, register} = useStep1()
    return(
    
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Steps  currentStep={1}/>
            <header className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Information personal</h1>
            </header>
        
        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(handleSubmitNextStep)}>

            <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <div className="relative">
                    <input
                        type="text"
                        data-error={errors.fullName}
                        className={`w-full rounded-lg p-4 pe-12 text-sm 
                        shadow-sm border border-zinc-900 data-[error]:border-red-500`}
                        id="fullName" 
                        placeholder="Enter full name"
                        {...register("fullName")}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineUser  
                            data-error={errors.fullName}
                            className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`}/>
                    </span>
                </div>
                {errors.fullName && <p className="text-sm text-red-500 ">{errors.fullName.message}</p>}
            </div>

            <div>
                <label htmlFor="gender" className="sr-only">
                    Gender
                </label>
                <div className="relative">
                    <select
                        className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
                        id="gender"
                        data-error={errors.gender}
                        {...register("gender")}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {errors.gender && 
                <p   title="genderInvalid"
                role="alert" 
                className="text-sm text-red-500 ">
                    {errors.gender.message}
                </p>}
            </div>


          <div>
            <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                    <input
                        type="email"
                        data-error={errors.fullName}
                        className={`w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
                        placeholder="Enter email"
                        id="email"
                        {...register("email")}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineMail  
                            data-error={errors.email}
                            className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`}/>
                    </span>
                </div>
                {errors.email && 
                <p title="emailInvalid"
                   role="alert"  
                   className="text-sm text-red-500 ">
                    {errors.email.message}
                </p>}
            </div>

            

            <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                    <input
                        type="password"
                        className={`w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500`}
                        placeholder="Enter password"
                        id="password"
                        data-error={errors.password}
                        {...register("password")}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineEye  
                            data-error={errors.password}
                            className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500`}/>
                    </span>
                </div>
                {errors.password && 
                <p title="passwordInvalid"
                    role="alert"                  
                    className="text-sm text-red-500 ">
                    {errors.password.message}
                </p>}
            </div>

            <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm password</label>

                <div className="relative">
                    <input
                        type="password"
                        className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border border-zinc-900 data-[error]:border-red-500"
                        placeholder="Enter a confirm password"
                        id="confirmPassword"
                        data-error={errors.confirmPassword}
                        {...register("confirmPassword")}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineEye  
                            data-error={errors.confirmPassword}
                            className={`h-4 w-4 text-zinc-800 data-[error]:text-red-500` }/>
                    </span>
                </div>
                {errors.confirmPassword && 
                <p title="confirmPasswordInvalid"
                    role="alert"
                    className="text-sm text-red-500">
                        {errors.confirmPassword.message}
                </p>}
            </div>

            <div className="flex items-center justify-between">
                <Link to="/login" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                    Login
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