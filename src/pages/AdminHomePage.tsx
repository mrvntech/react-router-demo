import { useContext } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import useAuthentication from "../utils/useAuthentication";
import { AuthenticationDispatchContext } from "../utils/AuthenticationContext";

export default function AdminHomePage() {
    useAuthentication("admin")
    const authenticationDispatch = useContext(AuthenticationDispatchContext)
    return (
        <DefaultLayout>
            <div>this is admin home page</div>
            <button onClick={() => authenticationDispatch != null ? authenticationDispatch({ type: 'logout' }) : alert("error")}>logout</button>
        </DefaultLayout>
    )
}