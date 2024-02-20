// card grid for new articles

import type { FC } from "react"

import BlogCard from "./blog_card"

interface Card {
    title : string,
	description : string,
    image : string,
    pubDate : string,
    tags? : string[],
    url : string,
}

interface Props {
    posts : Card[]
}



const NewArticlesSection:FC<Props> = ({ posts }) => {
    return (
        <section id="new-articles">
            {posts.map((blog, i) => {
                return <BlogCard {...blog} key={i} />
            })}
        </section>
    )
}

export default NewArticlesSection


