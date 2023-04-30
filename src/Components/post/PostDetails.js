import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, save, setToServer } from '../../redux/features/update/updateSlice';

const PostDetails = ({ blog }) => {
    const { id, title, description, image, tags, likes, isSaved } = blog;
    const dispatch = useDispatch();
    const { likes: nLikes, isSaved: nSaved, fulfilled } = useSelector((state) => state.update)


    useEffect(() => {
        dispatch(save(isSaved));
        dispatch(like((likes)));
    }, [])
    const handleLike = () => {
        dispatch(like(likes));
        dispatch(setToServer({ id, newlikes: nLikes, newIsSaved: isSaved }))
    }
    const handleSave = () => {
        dispatch(save(!isSaved))
        dispatch(setToServer({ id, newlikes: likes, newIsSaved: !isSaved }))
    }
    console.log(isSaved, "--", nSaved, "--", fulfilled.isSaved);

    let tagsContent = tags?.map((tag) => `#${tag}`).join(", ")
    return (
        <main className="post">
            <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    {tagsContent}
                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks" onClick={handleLike}>
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>
                    {/* <!-- handle save on button click --> */}
                    {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                    {
                        <button className={`${nSaved && 'active'} save-btn`} id="lws-singleSavedBtn" onClick={handleSave} >
                            <i className="fa-regular fa-bookmark"></i> {nSaved ? "Saved" : "Save"}
                        </button>
                    }
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default PostDetails