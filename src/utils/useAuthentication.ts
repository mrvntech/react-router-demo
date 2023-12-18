import { useContext, useEffect } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { useNavigate } from "react-router-dom";

export default function useAuthentication(role?: string) {
    const navigate = useNavigate()
    const authenticationContext = useContext(AuthenticationContext)
    useEffect(() => {
        if (authenticationContext == null) {
            navigate("/login")
        }
        if (role && authenticationContext && role != authenticationContext.user.role) {
            if (authenticationContext.user.role == 'admin') navigate("/admin-home")
            else navigate("/user-home")
        }
    }, [authenticationContext])
}

