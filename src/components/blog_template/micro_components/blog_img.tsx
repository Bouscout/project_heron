import type { FC } from "react"


interface BlogProps {
    src : string,
    alt? : string,
    caption? : string,
    eager? : boolean
}

const BlogImage:FC<BlogProps> = ({ src, alt="Hero image", caption, eager=false}) => (
    <figure>
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
        <figcaption>{caption ? caption : alt === "Hero image" ? "" : alt}</figcaption>
    </figure>
)

export default BlogImage