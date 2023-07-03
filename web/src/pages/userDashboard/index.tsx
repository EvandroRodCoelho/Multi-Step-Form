/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect } from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { UserInformation } from "../../components/userInformation";
import { UserContext } from "../../context/userContext";

import { Header } from "../../components/header";

export function UserDashboard() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user, isAuthenticated} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if(!isAuthenticated) {
            navigate("/login");
        }
    },[isAuthenticated, navigate]);
    
    return (
        <div className="w-screen h-screen bg-zinc-300">
           <Header  />
            
            <div className="w-full flex flex-col items-center px-3 py-4">
                <div className="w-full md:w-3/4 lg:w-2/5 flex flex-col  bg-zinc-200 px-5 py-3 rounded-lg shadow-md selection:bg-zinc-900 selection:text-zinc-100">
                    <div className=" ">
                        <h2 className="font-bold text-xl md:text-2xl">
                            <strong>User Information</strong>
                        </h2>
                    </div>

                    <div className="mt-3">
                        <UserInformation
                            title="Email:"
                            information={user.informationPessoal.email}
                        />
                        <UserInformation
                            title="Full name:"
                            information={user.informationPessoal.fullName}
                        />
                        <UserInformation
                            title="Gender:"
                            information={user.informationPessoal.gender}
                        />

                        <div className="mt-2">
                            <h2 className="font-bold text-2xl">
                                <strong>Address Information</strong>
                            </h2>
                        </div>

                        <UserInformation
                            title="Zip Code:"
                            information={user.address.zipCode}
                        />
                         <UserInformation
                            title="City:"
                            information={user.address.city}
                        />
                        <UserInformation
                            title="Country:"
                            information={user.address.country}
                        />
                        <UserInformation 
                            title="State:"
                            information={user.address.state}
                        />

                        <div className="mt-2">
                            <h2 className="font-bold text-2xl">
                                <strong>Contact Information</strong>
                            </h2>
                        </div>

                        <div className="flex items-center text-2xl gap-3 md:text-3xl">
                            <a href={user.socialProfile.urlLinkedin} className="text-zinc-700 hover:text-zinc-900">
                                <AiOutlineLinkedin  />
                            </a>
                            <a href={user.socialProfile.urlGitHub} className="text-zinc-800 hover:text-zinc-900">
                                <AiOutlineGithub />
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );

}