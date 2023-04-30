import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import RelatedSinglePost from './RelatedSinglePost'

const RelatedPosts = () => {
    const { relatedBlogs, isLoading, isError, error } = useSelector((state) => state.relatedBlogs);

    //related blogs
    let relatedBlogsContent;
    if (isLoading) relatedBlogsContent = <Loading />
    if (!isLoading && isError) relatedBlogsContent = <div>{error}</div>
    if (!isLoading && !isError && relatedBlogs.length < 1) relatedBlogsContent = <p>No Related Blogs</p>
    if (!isLoading && !isError && relatedBlogs.length > 0) relatedBlogsContent = relatedBlogs.map((blog) => <RelatedSinglePost key={blog.id} blog={blog} />)

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {relatedBlogsContent}
            </div>
        </aside>
    )
}

export default RelatedPosts