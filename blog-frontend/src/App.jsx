import { useState } from "react";

import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import CreatePost from "./pages/CreatePost";
import DeletePost from "./pages/DeletePost";
import Login from "./pages/Login";

function App() {
    const [refreshPosts, setRefreshPosts] = useState(0);

    function handlePostChanged() {
        setRefreshPosts(prev => prev + 1);
    }

    function handleLogout() {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
    }  

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return Boolean(
            localStorage.getItem("access_token")
        );
    });

    return (
        <>
            <Navbar
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
            />

            {isAuthenticated ? (
                <>
                    <main>
                        <PostList
                            refreshPosts={refreshPosts}
                        />
                    </main>

                    <CreatePost
                        onPostCreated={handlePostChanged}
                    />

                    <DeletePost
                        onPostDeleted={handlePostChanged}
                    />
                </>
            ) : (
                <Login
                    onLogin={() => setIsAuthenticated(true)}
                />
            )}
        </>
    );
}

export default App;