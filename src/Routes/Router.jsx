import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../About/About";
import AllTreatments from "../Components/AllTreatments/AllTreatments";
import Appointments from "../Components/Appointments/Appointments";
import Profile from "../Components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>
            },
            {
                path: '/appointments',
                element: <Appointments></Appointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;