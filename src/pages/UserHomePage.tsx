import { Outlet } from "react-router-dom";
import TopNavigation from "../components/pages/user-home/TopNavigation";
import useAuthentication from "../utils/useAuthentication";
import DefaultLayout from "../layout/DefaultLayout";
import { useContext } from "react";
import { AuthenticationDispatchContext } from "../utils/AuthenticationContext";

export default function UserHomePage() {
    useAuthentication('user')
    const authenticationDispatch = useContext(AuthenticationDispatchContext)
    return (
        <DefaultLayout>
            <div className="flex flex-col">
                <div>this is user home page</div>
                <TopNavigation />
                <Outlet />
                <button onClick={() => authenticationDispatch != null ? authenticationDispatch({ type: 'logout' }) : alert("error")}>logout</button>
            </div>
        </DefaultLayout>
    )
}