import { useContext } from "react"
import { AuthenticationDispatchContext } from "../utils/AuthenticationContext"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const authenticationDispatch = useContext(AuthenticationDispatchContext)
    const navigate = useNavigate()
    return (
        <>
            <div>this is login page</div>
            <div className="flex flex-row gap-4">
                <button onClick={() => {
                    authenticationDispatch ? authenticationDispatch({ type: 'login', role: 'admin' }) : alert("error")
                    navigate("/admin-home")
                }}>admin login</button>
                <button onClick={() => {
                    authenticationDispatch ? authenticationDispatch({ type: 'login', role: 'user' }) : alert("error")
                    navigate("/user-home")
                }}>user login</button>
            </div>
        </>
    )
}