
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();

    const {id, title, body} = post;

    console.log(postId);

    const handleGoBack = () => {
        // navigate('/posts')
        navigate(-1)
    }
    return (
        <div>
            <h4>Post details of: {id}</h4>
            <h6>Tiitle: {title}</h6>
            <h6>Tiitle: {body}</h6>
            <br />
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;