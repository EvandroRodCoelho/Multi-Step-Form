import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./LoginSchema";
import { LoginData } from "../../../types/LoginData";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export function useLogin () {

    const {register, handleSubmit, formState:{errors}, setError } = useForm<LoginData>({
        resolver: zodResolver(LoginSchema)
    });
    const navigate = useNavigate(); 
    const { handleUser, setIsAuthenticated } = useContext(UserContext);
  
    async function handleLogin(data:LoginData) {
        try {
          const response = await axios.post('http://localhost:3333/login', data); 
          handleUser(response.data);
          setIsAuthenticated(true);
          navigate('/user/dashboard');
          return;   
        } catch (error) {
          if ((error as AxiosError)?.response?.status === 404) {
            setError("email",{message:"Email not found"});
            return;
          } 
          if ((error as AxiosError)?.response?.status === 401) {
              setError("password",{message:"Invalid password"})
              return;
           } 
        }}
    return {
        register,
        handleSubmit,
        errors,
        handleLogin
    }
}