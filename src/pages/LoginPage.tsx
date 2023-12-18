import { useContext } from "react"
import { AuthenticationDispatchContext } from "../utils/AuthenticationContext"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const authenticationDispatch = useContext(AuthenticationDispatchContext)
    const navigate = useNavigate()
    return (
        <>
            <div>this is login page</div>
            <button onClick={() => {
                authenticationDispatch ? authenticationDispatch({ type: 'login' }) : alert("error")
                navigate("/profile")
            }}>login</button>
        </>
    )
}