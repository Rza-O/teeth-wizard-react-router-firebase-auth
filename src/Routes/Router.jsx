import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../About/About";
import AllTreatments from "../Components/AllTreatments/AllTreatments";
import Appointments from "../Components/Appointments/Appointments";
import Profile from "../Components/Profile/Profile";
import Details from "../Components/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json();

                    const feedBackRes = await fetch('/happyclients.json');
                    const feedBackData = await feedBackRes.json();

                    return { serviceData, feedBackData }
                }
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/appointments',
                element: <Appointments></Appointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    const res = await fetch('/service.json');
                    const data = await res.json();
                    // console.log(data, params.id);
                    const singleData = data.find(d => d.id == params.id);
                    // console.log(singleData);
                    return singleData
                }
            }
        ]
    }
])

export default router;