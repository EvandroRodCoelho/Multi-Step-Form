/* eslint-disable react-hooks/rules-of-hooks */

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/userContext";
import { UserSocialProfileData } from "../../../../types/userType";
import { SocialProfileSchema } from "./SocialProfileSchema";
import axios from "axios";

export function useStep3() {
    const {user, handleUser}  = useContext(UserContext);
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors} } = useForm<UserSocialProfileData>({
        resolver: zodResolver(SocialProfileSchema),        
        mode:"all",
        criteriaMode:"all",
    });

    async function submit(data:UserSocialProfileData):Promise<void> { 
        event?.preventDefault();
        handleUser({
            address:user.address,
            informationPessoal: user.informationPessoal,
            socialProfile:data
        }); 
        
        try {
            await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/register/create`, user); 
            navigate("/login")
        }
        catch {
            console.log("error");
        }
    }
    const checkFieldsStep3 =useCallback(() => {
        const requiredFieldsStep3 = [
          user.address.city,
          user.address.country,
          user.address.state,
          user.address.zipCode,
        ];

        const isAnyFieldEmptyStep3 = requiredFieldsStep3.some((field) => field === "");
      
        return !isAnyFieldEmptyStep3;
      },[user.address.city, user.address.country, user.address.state, user.address.zipCode]);

    useEffect(() => {
        if(!checkFieldsStep3()){
            navigate("/register/step1")
        }
    },[checkFieldsStep3, navigate])
    return {
        submit,
        register,
        errors,
        handleSubmit
    };
}