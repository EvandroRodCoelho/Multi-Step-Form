import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/userContext";
import { AddressInformationData } from "../../../../types/userType";
import { zipCodeMask } from "../../../../utils/masks/zipCodeMask";
import { AddressInformationSchema } from "./AddressInformationSchema";
import states from '../../../../../stateBrazil.json';
export function useStep2() {
    const { user, handleUser}  = useContext(UserContext);

    const checkFields = useCallback(() => {
      const { email, password, fullName, gender } = user.informationPessoal;
    
      const inform = [email, password, fullName, gender];
      const informTest = inform.filter((inform) => inform === "");
    
      return informTest.length > 0;
    }, [user.informationPessoal]);
      
    const {register, handleSubmit, 
      formState:{errors}, watch,
      setValue } = useForm<AddressInformationData>({
        resolver: zodResolver(AddressInformationSchema),
        defaultValues: {
          city:user?.address.city,
          country:user?.address.country,
          state:user?.address.state,
          zipCode:user?.address.zipCode,
        },
        mode:"all",
        criteriaMode:"all",
    });
  
    const navigate = useNavigate();
    function handleSubmitNextStep(data:AddressInformationData,): void { 
        event?.preventDefault();
        handleUser({
            socialProfile:user.socialProfile,
            informationPessoal: user.informationPessoal,
            address:data
        });
        navigate("/register/step3");
    }
  
    const zipCodeValue = watch("zipCode");
  
    const handleSetValue = useCallback(async (value:AddressInformationData) => {
      setValue("zipCode",value.zipCode);
      setValue("city",value.city);
      setValue("country",value.country);
      setValue("state",value.state);
    },[setValue]);
  
    const handleGetAddress = useCallback(async (zipCode: string) => {
      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
    
        if (data.error) throw new Error(data.error);
    
        const stateFiltered = states.UF.filter(state => data.uf === state.uf);
        const stateName = stateFiltered.length > 0 ? stateFiltered[0].name : "";
      
        const address: AddressInformationData = {
          zipCode:data.cep ? data.cep: zipCode,
          city: data.localidade,
          country: "Brasil",
          state: stateName,
        };
        handleSetValue(address);
      } catch (error) {
        console.error('Erro ao obter o endereço:', error);
        const errorAddress: AddressInformationData = {
          zipCode: zipCode,
          city: '',
          country: '',
          state: '',
        };
        handleSetValue(errorAddress);
      }
    }, [handleSetValue]);
    
    useEffect(() => {
      const isInformationPessoalExists = checkFields();
      if(isInformationPessoalExists) {
        navigate("/register/step1")
        return;
      }
      
      
    }, [checkFields, navigate]);
   
    useEffect(() => {
      setValue("zipCode", zipCodeMask(zipCodeValue));
      if (!zipCodeValue || zipCodeValue.length !== 9) return;
    
      handleGetAddress(zipCodeValue);
    }, [handleGetAddress, setValue, zipCodeValue]);
    return {
        handleSubmit,
        handleSubmitNextStep,
        errors,
        register,
    }
}