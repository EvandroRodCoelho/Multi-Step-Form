import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { Steps } from "../../../../components/register/steps";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const UserInformationPersonalSchema = z.object({
    fullName: z.string().nonempty("FullName is required").
    regex(/^[a-zA-Z]*$/,"Cannot contain special characters or numbers"),
    email: z.string().nonempty("Email is required").email(),
    gender:z.string().nonempty("Gender is required"),
    password: z.string().nonempty("Password is required").min(6,"password must be at least 6 characters"),
    confirmPassword: z.string().nonempty("Password confirmation is required"),
}).refine((field) => field.password === field.confirmPassword, {
    path:["confirmPassword"],
    message: "Passwords do not match"
} )

type UserInformationPersonalData = z.infer <typeof UserInformationPersonalSchema>;


export function Step1() {
    const {register, handleSubmit, formState:{errors} } = useForm<UserInformationPersonalData>({
        resolver: zodResolver(UserInformationPersonalSchema),
    });
    const navigate = useNavigate();

    function handleSubmitToStep2(data: UserInformationPersonalData): void { 
        event?.preventDefault();
        console.log(data);
        navigate("/register/step2");
    }

    return(
    
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Steps  currentStep={1}/>
            <header className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Information personal</h1>
            </header>
        
        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(handleSubmitToStep2)}>

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
                {errors.gender && <p className="text-sm text-red-500 ">{errors.gender.message}</p>}
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
                {errors.email && <p className="text-sm text-red-500 ">{errors.email.message}</p>}
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
                {errors.password && <p className="text-sm text-red-500 ">{errors.password.message}</p>}
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
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            <div className="flex items-center justify-between">
                <div />
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