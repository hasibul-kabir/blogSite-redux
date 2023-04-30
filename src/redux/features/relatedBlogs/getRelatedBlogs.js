// http://localhost:9000/blogs?tags_like=react&id_ne=1

import axios from "../../../utils/axios"

const getRelatedBlogs = async ({ tags, id }) => {
    let queryString =
        tags?.length > 0
            ? tags.map((tag) => `tags_like=${tag}`).join("&") +
            `&id_ne=${id}`
            : `id_ne=${id}`;

    const response = await axios.get(`/blogs?${queryString}`);
    return response.data;
}

export default getRelatedBlogs;