import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    const PostsContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }
    return (
        <div>
            <h4>My All Posts: {posts.length}</h4>
            <div style={PostsContainerStyle}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;