/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export function UserDashboard() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user, isAuthenticated} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(()=> {
        if(!isAuthenticated) {
            navigate("/login");
        }
    },[isAuthenticated, navigate]);
    
    return (
        <div>
            <h1><strong>Dashboard</strong></h1>

            <div>
                <p>Nome:</p>
                <p>{user.informationPessoal.fullName}</p>
            </div>
        </div>

    );

}