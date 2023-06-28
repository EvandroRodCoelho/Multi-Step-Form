import { ReactNode, createContext, useState } from "react";
import { UserProps } from "../types/userType";
import {mockedUser} from "../mock/userMock";
import { UserProviderProps } from "../types/UserProviderType";

const UserContext = createContext<UserProviderProps>({} as UserProviderProps);

function UserProvider({ children }:{ children: ReactNode} ) {
    
    const [user , setUser] = useState<UserProps>(mockedUser)

    function handleUser(user:UserProps) {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{user,handleUser}} >
            {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export {UserProvider, UserContext}