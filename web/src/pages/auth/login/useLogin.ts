import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { LoginData } from "../../../types/LoginData";
import { LoginSchema } from "./LoginSchema";


export function useLogin () {

    const {register, handleSubmit, formState:{errors}, setError } = useForm<LoginData>({
        resolver: zodResolver(LoginSchema)
    });
    const navigate = useNavigate(); 
    const { handleUser, setIsAuthenticated } = useContext(UserContext);
    
  
    async function handleLogin(data:LoginData) {

        try {
          const response = await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}/login` , data); 
          
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
           alert("Error")
        }}
    return {
        register,
        handleSubmit,
        errors,
        handleLogin,
        
    }
}