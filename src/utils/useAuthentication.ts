import { useContext, useEffect } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { useNavigate } from "react-router-dom";

export default function useAuthentication() {
    const navigate = useNavigate()
    const authenticationContext = useContext(AuthenticationContext)
    useEffect(() => {
        if (authenticationContext == null) {
            navigate("/login")
        }
    }, [authenticationContext])
}

