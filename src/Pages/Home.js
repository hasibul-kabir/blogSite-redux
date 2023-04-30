import React from 'react'
import Posts from '../Components/home/AllPosts/Posts'
import SideBar from '../Components/home/Sidebar/SideBar'

const Home = () => {
    return (
        <section className="wrapper">
            <SideBar />

            <Posts />

        </section>
    )
}

export default Home