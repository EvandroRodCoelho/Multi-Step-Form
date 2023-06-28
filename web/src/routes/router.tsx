import {createBrowserRouter} from "react-router-dom";
import { Home } from "../pages/home";
import { Step1 } from "../pages/auth/register/step1";
import { Error }   from "../pages/error"
import { Step3 } from "../pages/auth/register/step3";
import { Step2} from "../pages/auth/register/step2";
import { Login } from "../pages/auth/login";
export const router = createBrowserRouter([ 
    {
        path:"/",
        element:<Home />,
        errorElement:<Error  />
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/register/step1",
        element:<Step1  />
    },
    {
        path:"/register/step2",
        element:<Step2  />
    },
    {
        path:"/register/step3",
        element:<Step3  />
    }
]);
