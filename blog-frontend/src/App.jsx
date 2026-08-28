import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

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

    return (
        <>
            <Navbar />

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
                    element={<Login />}
                />

                <Route
                    path="/create-post"
                    element={
                        <ProtectedRoute>
                            <CreatePost
                                onPostCreated={handlePostChanged}
                            />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/delete-post"
                    element={
                        <ProtectedRoute>
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