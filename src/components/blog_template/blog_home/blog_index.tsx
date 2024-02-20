import type { FC } from "react"

import BlogCard from "./blog_card"
import NewArticlesSection from "./new_articles"

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
    
    
    
    // for new article section
    const seperate_section = 4
    
    let normal_posts: Card[] = []
    let new_posts: Card[] = []


    if(blogs.length > seperate_section){
        new_posts = blogs.slice(0, seperate_section)
        normal_posts = blogs.slice(seperate_section, blogs.length)
    }
    else {
        new_posts = blogs
    }

    return (
        <>

        <NewArticlesSection posts={new_posts} />

        {normal_posts.map((blog, i) => {
            return <BlogCard {...blog} key={i} />
        })}


        </>
    )
}

export default AccueilBlog
