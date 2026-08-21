import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Navbar />
            <Login />
            <main>
                <PostList />
            </main>
            <CreatePost />
        </>
    );
}

export default App;