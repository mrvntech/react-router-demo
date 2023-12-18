import { createBrowserRouter } from "react-router-dom";
import UserHomePage from "../pages/UserHomePage";
import HomePage from "../pages/HomePage";
import Contact from "../components/pages/user-home/Contact";
import Information from "../components/pages/user-home/Information";
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
        path: '/user-home',
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
    {
        path: '/admin-home',
        element: <AdminHomePage />
    }
])