import React from 'react';
import { Link } from 'react-router-dom';

const RelatedSinglePost = ({ blog }) => {
    const { id, title, image, tags, createdAt } = blog;

    let tagsContent = tags?.map((tag) => `#${tag}`).join(", ")
    return (
        <div className="card">
            <Link to={`/posts/${id}`}>
                <img src={image} className="card-image" alt="blogImg" />
            </Link>
            <div className="p-4">
                <Link to={`/posts/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div className="mb-0 tags">
                    {tagsContent}
                    {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    )
}

export default RelatedSinglePost