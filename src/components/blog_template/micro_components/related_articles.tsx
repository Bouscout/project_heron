import type { FC } from "react"

interface Props {
    slug? : string,
    articles : string[],
    lang? : "en" | "fr"
}

const RelatedArticles:FC<Props> = ({ slug, articles, lang="en" }) => {
    // const pages = slug.split("/")
    // const links = []

    // for (let index = 0; index < articles.length; index++) {
    //     const element = articles[index];
    //     links.push([...pages.slice(0, pages.length - 1), element].join("/"))

    // }

    const name = lang === "en" ? "Related Articles" : "Articles liés"

    return (
        <div className="related-articles">

            <h4>{name}</h4>

            {articles.map((link, i) => {
                return <a href={link} key={i} >{link.split("/").at(-1)}</a>
            })}

        </div>
    )
}

export default RelatedArticles