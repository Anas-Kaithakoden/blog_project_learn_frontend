import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login.jsx";
import DeletePost from "./pages/DeletePost.jsx";

function App() {
    const [refreshPosts, setRefreshPosts] = useState(0);
    function handlePostChanged() {
        setRefreshPosts(prev => prev + 1);
    }

    return (
        <>
            <Navbar />
            <Login />
            <main>
                <PostList refreshPosts={refreshPosts} />
            </main>
            <CreatePost onPostCreated={handlePostChanged} />
            <DeletePost onPostDeleted={handlePostChanged} />
        </>
    );
}

export default App;