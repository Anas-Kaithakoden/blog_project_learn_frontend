import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import CreatePost from "./pages/CreatePost";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <PostList />
            </main>
            <CreatePost />
        </>
    );
}

export default App;