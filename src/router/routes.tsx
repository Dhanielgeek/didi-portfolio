import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/Homelayouts";


export const routes = createBrowserRouter([
     {
        path : "", 
        element: <HomeLayout/>
    }
])