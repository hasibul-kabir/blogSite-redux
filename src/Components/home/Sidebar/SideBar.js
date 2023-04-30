import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

const SideBar = () => {
    return (
        <aside>
            <div className="sidebar-items">
                <Sort />
                <Filter />
            </div>
        </aside>
    )
}

export default SideBar