import { FormEvent, useContext } from "react";
import { UserInformationPersonalData } from "./UserInformationPersonalData";
import { useForm } from "react-hook-form";
import { UserInformationPersonalSchema } from "./UserInformationPersonalSchema";
import { UserContext } from "../../../../context/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function useStep1() {

    const {user, handleUser}  = useContext(UserContext);

    const {register, handleSubmit, formState:{errors} } = useForm<UserInformationPersonalData>({
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
    return {
        handleSubmitNextStep,
        register,
        errors,
        handleSubmit
    }
}