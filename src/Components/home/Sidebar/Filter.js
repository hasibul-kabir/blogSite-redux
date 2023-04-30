import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../../redux/features/filter/filterSlice';

const Filter = () => {
    const { filterBy } = useSelector((state) => state.filterBy)
    const [checked, setChecked] = useState(filterBy);
    const dispatch = useDispatch();

    dispatch(filter(checked));
    return (
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                {/* <!-- handle filter on button click --> */}
                <div>
                    <input type="radio" name="filter" id="lws-all" value="all" checked={checked === 'all'} className="radio" onChange={(e) => setChecked(e.target.value)} />
                    <label for="lws-all">All</label>
                </div>
                <div>
                    <input type="radio" name="filter" id="lws-saved" value="saved" checked={checked === 'saved'} className="radio" onChange={(e) => setChecked(e.target.value)} />
                    <label for="lws-saved">Saved</label>
                </div>
            </div>
        </div>
    )
}

export default Filter