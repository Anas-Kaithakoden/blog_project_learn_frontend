import "./Navbar.css";

function Navbar({ isAuthenticated, onLogout }) {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">My Blog</h2>

            <div className="navbar-links">
                <a href="/">Posts</a>

                {isAuthenticated && (
                    <>
                        <a href="/create-post">Create Post</a>

                        <button onClick={onLogout}>
                            Logout
                        </button>
                    </>
                )}

                {!isAuthenticated && (
                    <a href="/login">Login</a>
                )}
            </div>
        </nav>
    );
}

export default Navbar;