import { UserProps } from "./userType";

export interface UserProviderProps {
    user: UserProps ,
    handleUser: (user:UserProps) => void,
}