import axios from "../../../utils/axios"

// import axios from "axios"
//http://localhost:9000/blogs/${id}
const updateBlog = async ({ id, newlikes, newIsSaved }) => {
    const response = await axios
        .patch(`/blogs/${id}`, {
            likes: newlikes,
            isSaved: newIsSaved
        }, {
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

    return response.data;

}

export default updateBlog