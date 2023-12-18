import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect, useReducer } from "react";
import { AuthenticationContext, AuthenticationDispatchContext, getAuthentication } from "./utils/AuthenticationContext";
import authenticationReducer from "./utils/authenticationReducer";

export default function App() {
    const [authentication, authenticationDispatch] = useReducer(authenticationReducer, null, getAuthentication)
    useEffect(() => {
        localStorage.setItem("authentication", JSON.stringify(authentication))
    }, [authentication])

    return (
        <AuthenticationContext.Provider value={authentication}>
            <AuthenticationDispatchContext.Provider value={authenticationDispatch}>
                <RouterProvider router={router} />
            </AuthenticationDispatchContext.Provider>
        </AuthenticationContext.Provider>
    )
}