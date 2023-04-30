import React from 'react';
import SavedTag from './SavedTag';
import { Link } from 'react-router-dom';

const SinglePost = ({ blog = {} }) => {
    const { id, title, image, tags, likes, isSaved, createdAt } = blog;
    let tagsContent = tags?.map((tag) => `#${tag}`).join(", ")
    return (
        <div className="lws-card">
            <Link to={`posts/${id}`}>
                <img src={image} className="lws-card-image" alt="postImg" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`posts/${id}`} className="lws-postTitle"> {title} </Link>
                <div className="lws-tags">
                    {tagsContent}
                </div>
                {/* <!-- Show this element if post is saved --> */}
                {
                    isSaved && <SavedTag />
                }

            </div>
        </div>
    )
}

export default SinglePost