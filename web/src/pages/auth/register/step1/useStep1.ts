import {  useContext } from "react";
import { UserInformationPersonalData } from "./UserInformationPersonalData";
import { useForm } from "react-hook-form";
import { UserInformationPersonalSchema } from "./UserInformationPersonalSchema";
import { UserContext } from "../../../../context/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

export function useStep1() {

    const {user, handleUser}  = useContext(UserContext);

    const {register, handleSubmit, formState:{errors}, setError } = useForm<UserInformationPersonalData>({
        resolver: zodResolver(UserInformationPersonalSchema),
        defaultValues: {
            fullName:user?.informationPessoal.fullName ,
            email:user?.informationPessoal.email ,
            gender:user?.informationPessoal.gender ,
            password:user?.informationPessoal.password,
            confirmPassword: ""
        },
        mode:"all",
        criteriaMode:"all",
    });
    const navigate = useNavigate();

    async function handleSubmitNextStep(data: UserInformationPersonalData)  { 
        event?.preventDefault();
       try {
          await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/register/step1`, data); 
       }catch (error) {
        if ((error as AxiosError)?.response?.status === 404) {
            await handleUser({
                informationPessoal: {
                    email: data.email,
                    fullName: data.fullName,
                    gender: data.gender,
                    password: data.password
                },
                address: user.address,
                socialProfile: user.socialProfile
            });
            navigate("/register/step2");
          } 
          if ((error as AxiosError)?.response?.status === 401) {
            setError("email",{message:"Email is exists"});
          } 
          
       }
    }
    return {
        handleSubmitNextStep,
        register,
        errors,
        handleSubmit
    }
}