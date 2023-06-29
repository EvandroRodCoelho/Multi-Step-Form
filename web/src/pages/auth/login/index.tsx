import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { z } from "zod";
import { LoginSchema } from "./LoginSchema";


type LogonData = z.infer <typeof LoginSchema>;
export function Login() {
    const {register, handleSubmit, formState:{errors} } = useForm<LogonData>({
        resolver: zodResolver(LoginSchema)
    });

    function handleLogin(data: LogonData) {
        console.log(data);
    }
    return(

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
            </header>
            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                        <input
                            type="email"
                            data-error={errors.email}
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
                    {errors.email && <p role="alert-email-invalid" className="text-sm text-red-500 ">{errors.email.message}</p>}
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
                    {errors.password && <p role="alert-password-invalid" className="text-sm text-red-500 ">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        role="Login"
                        type="submit"
                        className=" w-full inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                    Login
                    </button>
                </div>
                <Link to="/register/step1"
                    className="underline mt-3"
                >
                    Not registered yet? Register
                </Link>
            </form>
        </div>
    );
}