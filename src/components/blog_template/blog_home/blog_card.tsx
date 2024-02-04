
import { type FC } from "react";


interface Card {
    title : string,
	description : string,
    image : string,
    pubDate : string,
    tags? : string[],
    url : string,
}

const BlogCard:FC<Card> = ({ title, image, pubDate, tags, url }) => (
        <div className="blog-card">
            <CardImage imgUrl={image} alt={title} />
            <CardDetails title={title} tags={tags} published={pubDate} url={url} />
        </div>
)
    

interface imgProps {
    imgUrl : string,
    alt : string,
}

const CardImage:FC<imgProps> = ({ imgUrl, alt }) => (            
    <img  src={imgUrl} alt={alt} loading='eager'/>
)

interface DetailProps {
    title : string,
    tags? : string[],
    published : string,
    url : string
}

const CardDetails:FC<DetailProps> = ({ title, tags=[], published, url }) => {
    const actualTags = tags.length === 0 ? ["General"] : tags
    
    return (
        <div className="card-details">

            <div>
            {actualTags.map((tag, i) => {
                return <span key={i}>{tag}</span>
            })}
            </div>

            <a href={url}>
                <h2>{title}</h2>
            </a>
            <hr></hr>

            <h4>{published}</h4>

        </div>
    )
}


export default BlogCard