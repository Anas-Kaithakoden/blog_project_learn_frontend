import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const {
        isAuthenticated,
        logoutUser
    } = useAuth()

    const navigate = useNavigate();
    
    function handleLogout() {
        logoutUser();
        navigate("/login");
    }
    
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">My Blog</h2>

            <div className="navbar-links">
                <Link to="/">Posts</Link>
                {isAuthenticated && (
                    <>
                        <Link to="/create-post">Create Post</Link>
                        <Link to="/delete-post">Delete Post</Link>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}

                {!isAuthenticated && (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;