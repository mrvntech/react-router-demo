import { Outlet } from "react-router-dom";
import TopNavigation from "../components/pages/profile/TopNavigation";
import useAuthentication from "../utils/useAuthentication";
import DefaultLayout from "../layout/DefaultLayout";

export default function UserHomePage() {
    useAuthentication()
    return (
        <DefaultLayout>
            <div className="flex flex-col">
                <div>this is user profile page</div>
                <TopNavigation />
                <Outlet />
            </div>
        </DefaultLayout>
    )
}