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
    lang? : string
}



const AccueilBlog:FC<AccueilProps> = ({ blogs, lang }) => {
    // apply sorting or filter here before rendering the card

    return (
        <>
        {blogs.map((blog, i) => {
            return <BlogCard {...blog} key={i} />
        })}
        </>
    )
}

export default AccueilBlog
