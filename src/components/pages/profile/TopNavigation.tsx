import { Link } from "react-router-dom";

export default function TopNavigation() {
    return (
        <div className="flex flex-row gap-2">
            <Link to='/profile/contact'>Contact</Link>
            <Link to='/profile/information'>Information</Link>
        </div>
    )
}