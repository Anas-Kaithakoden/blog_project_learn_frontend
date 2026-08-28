import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import CreatePost from "./pages/CreatePost";
import DeletePost from "./pages/DeletePost";
import Login from "./pages/Login";


function App() {
    const [refreshPosts, setRefreshPosts] = useState(0);
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return Boolean(
            localStorage.getItem("access_token")
        );
    });

    function handlePostChanged() {
        setRefreshPosts(prev => prev + 1);
    }

    function handleLogout() {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
        navigate("/login");
    }

    return (
        <>
            <Navbar
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
            />

            <Routes>

                <Route
                    path="/"
                    element={
                        <main>
                            <PostList
                                refreshPosts={refreshPosts}
                            />
                        </main>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <Login
                            onLogin={() =>
                                setIsAuthenticated(true)
                            }
                        />
                    }
                />

                <Route
                    path="/create-post"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                        >
                            <CreatePost
                                onPostCreated={handlePostChanged}
                            />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/delete-post"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                        >
                            <DeletePost
                                onPostDeleted={handlePostChanged}
                            />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </>
    );
}

export default App;