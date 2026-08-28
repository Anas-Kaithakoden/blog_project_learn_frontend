import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout }) {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">My Blog</h2>

            <div className="navbar-links">
                <Link to="/">Posts</Link>
                {isAuthenticated && (
                    <>
                        <Link to="/create-post">Create Post</Link>
                        <Link to="/delete-post">Delete Post</Link>
                        <button onClick={onLogout}>
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