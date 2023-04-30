import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortBy } from '../../../redux/features/sort/sortSlice';

const Sort = () => {
    const { sortKey } = useSelector((state) => state.sortBy)
    const [sort, setSort] = useState(sortKey);
    const dispatch = useDispatch();

    dispatch(sortBy(sort));

    return (
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500" onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
            </select>
        </div>
    )
}

export default Sort