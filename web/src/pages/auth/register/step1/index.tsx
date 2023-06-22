import { Link } from "react-router-dom";
import {AiOutlineMail,AiOutlineEye,AiOutlineUser} from "react-icons/ai"
export function Step1() {


    return(
    
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <header className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Information personal</h1>
            </header>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">

            <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <div className="relative">
                    <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter full name"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineUser  className="h-4 w-4 text-gray-400"/>
                    </span>
                </div>
            </div>

            <div>
                <label htmlFor="gender" className="sr-only">
                    Gender
                </label>
                <div className="relative">
                    <select
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                </div>
            </div>


          <div>
            <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                    <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineMail  className="h-4 w-4 text-gray-400"/>
                    </span>
                </div>
            </div>

            

            <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                    <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineEye  className="h-4 w-4 text-gray-400"/>
                    </span>
                </div>
            </div>

            <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm password</label>

                <div className="relative">
                    <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter a confirm password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <AiOutlineEye  className="h-4 w-4 text-gray-400"/>
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div />
                <Link
                    to="/register/step2"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                    Next step
                </Link>
            </div>
        </form>
        </div>
    );
} 