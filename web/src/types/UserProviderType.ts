import { Dispatch, SetStateAction } from "react";
import { UserProps } from "./userType";

export interface UserProviderProps {
    user: UserProps ,
    handleUser: (user:UserProps) => void,
    isAuthenticated : boolean,
    setIsAuthenticated:Dispatch<SetStateAction<boolean>>
}