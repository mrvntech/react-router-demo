import { createBrowserRouter } from "react-router-dom";
import UserHomePage from "../pages/UserHomePage";
import HomePage from "../pages/HomePage";
import Contact from "../components/pages/profile/Contact";
import Information from "../components/pages/profile/Information";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <AdminHomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: 'profile',
        element: <UserHomePage />,
        children: [
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'information',
                element: <Information />
            }
        ]
    },
])