import { ReactNode, useContext, useEffect } from "react";
import { AuthenticationContext } from "../utils/AuthenticationContext";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
    const authenticationContext = useContext(AuthenticationContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (authenticationContext == null) navigate("/login")
    }, [authenticationContext])
    return (
        <>
            {children}
        </>
    )
}