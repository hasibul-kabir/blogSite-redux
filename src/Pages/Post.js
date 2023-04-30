import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import Breadcumb from '../Components/post/Breadcumb'
import PostDetails from '../Components/post/PostDetails'
import RelatedPosts from '../Components/post/RelatedPosts'
import { fetchBlog } from '../redux/features/blog/blogSlice'
import { fetchRelatedBlogs } from '../redux/features/relatedBlogs/relatedBlogsSlice';


const Post = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { blog, isLoading, isError, error } = useSelector((state) => state.blog);
    const { fulfilled } = useSelector((state) => state.update)


    useEffect(() => {
        dispatch(fetchBlog(postId))
    }, [dispatch, postId, fulfilled.isSaved, fulfilled.likes]);


    const { tags } = blog || {};
    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags, id: postId }))
    }, [dispatch, tags, postId])


    let blogDetailsContent;
    if (isLoading) blogDetailsContent = <Loading />
    if (!isLoading && isError) blogDetailsContent = <div>{error}</div>
    if (!isLoading && !isError && blog) blogDetailsContent = <PostDetails blog={blog} />


    return (
        <>
            <Breadcumb />
            <section className="post-page-container">

                {blogDetailsContent}

                <RelatedPosts />

            </section>
        </>
    )
}

export default Post