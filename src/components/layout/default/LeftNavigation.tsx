import { Link } from "react-router-dom";

export default function LeftNavigation() {
    return (
        <div className="flex flex-col">
            <Link to='/' >home</Link>
            <Link to='/user-home' >user-home</Link>
            <Link to='/admin-home' >admin-home</Link>
        </div>

    )
}