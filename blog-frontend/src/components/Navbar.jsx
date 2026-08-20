import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">My Blog</h2>

            <div className="navbar-links">
                <a href="/">Posts</a>
                <a href="/create-post">Create Post</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;