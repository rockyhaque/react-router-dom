
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, userId, title, body} = post;
    const navigate = useNavigate()

    const postStyle = {
        border: '3px solid green',
        padding: '5px',
        borderRadius: '20px',
        marginTop: '10px'
    }

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h3>Post ID: {id}</h3>
            <h4>Title: {title}</h4>
            <h4>Body: <small>{body}</small></h4>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <br />
            <br />
            
            <button onClick={handleShowDetails}>Click with Navigate</button>
        </div>
    );
};

export default Post;