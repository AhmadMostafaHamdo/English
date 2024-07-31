import { Link } from "react-router-dom";

export default function Header () {
    return (
    <nav className="d-flex container">
        <i></i>
        <div className="d-flex">
        <Link to="/login" className="btn-sign">Login</Link>
        <Link to="/register" className="btn-sign">Register</Link>
        </div>
    </nav>
    )
}