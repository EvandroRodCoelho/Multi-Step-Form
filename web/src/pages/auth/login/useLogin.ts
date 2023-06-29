import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./LoginSchema";
import { LoginData } from "../../../types/LoginData";
import { useForm } from "react-hook-form";

export function useLogin () {

    const {register, handleSubmit, formState:{errors} } = useForm<LoginData>({
        resolver: zodResolver(LoginSchema)
    });

    function handleLogin(data: LoginData) {
        console.log(data);
    }

    return {
        register,
        handleSubmit,
        errors,
        handleLogin
    }
}