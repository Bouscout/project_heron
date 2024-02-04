import type { FC } from "react"

import BlogCard from "./blog_card"

import "./blog_home.scss"


interface Card {
    title : string,
	description : string,
    image : string,
    pubDate : string,
    tags? : string[],
    url : string,
}

interface AccueilProps{
    blogs : Card[]
}



const AccueilBlog:FC<AccueilProps> = ({ blogs }) => {
    return (
        <>
        {blogs.map((blog, i) => {
            return <BlogCard {...blog} key={i} />
        })}
        </>
    )
}

export default AccueilBlog
