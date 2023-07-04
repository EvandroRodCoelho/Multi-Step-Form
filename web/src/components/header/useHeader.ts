import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { mockedUser } from "../../mock/userMock";

export function useHeader() {
    const {handleUser, setIsAuthenticated, user} = useContext(UserContext);
    const navigate = useNavigate();
    function handleLogout() {
        setIsAuthenticated(false);
        handleUser(mockedUser);
        navigate("/login");
    }

    async function handleDelete( ) {
        console.log("ola")
        try {
            const response = await axios.delete("http://localhost:3333/user/delete", {
             data: {
                "email": user.informationPessoal.email
             }   
            })
            console.log(response)
            if(response.status === 200) {
                setIsAuthenticated(false);
                handleUser(mockedUser);
                navigate("/login");
            }
            
            
        }catch {
            console.log("error");
            alert("error");
        }

    }


    return {
        handleLogout,
        handleDelete
    }
}