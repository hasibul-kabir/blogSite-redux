import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../../redux/features/blogs/blogsSlice';
import Loading from '../../Loading';
import SinglePost from './SinglePost'

const Posts = () => {
    const dispatch = useDispatch();
    const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);
    const { sortKey } = useSelector((state) => state.sortBy);
    const { filterBy } = useSelector((state) => state.filterBy);


    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    //sorting**
    let sorted;
    if (sortKey === "default") {
        sorted = [...blogs]?.sort((a, b) => {
            return a.id - b.id
        })
    }
    if (sortKey === "newest") {
        sorted = [...blogs]?.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
    }
    if (sortKey === "most_liked") {
        sorted = [...blogs]?.sort((a, b) => {
            return b.likes - a.likes
        })
    }
    //** */



    //filter
    if (filterBy === "all") {
        sorted = sorted.filter((el) => el)
    }
    if (filterBy === "saved") {
        sorted = sorted.filter((el) => el.isSaved);
    }
    //** */



    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && blogs.length === 0) content = <div>No Blogs Found!</div>
    if (!isLoading && !isError && blogs.length > 0) {
        content = sorted?.map((blog) => <SinglePost key={blog.id} blog={blog} />)
    }

    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    )
}

export default Posts