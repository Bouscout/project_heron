

// format date in a readable format
export const formatFullDate = (date:Date, lang:string) => {
    let lang_format = "en-US"

    if (lang === "fr"){
        lang_format = "fr-FR"
    }

    return date.toLocaleDateString(lang_format, {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2023"
        month: 'long',   // "January"
        day: 'numeric'   // "1"
    });
}

export const getTextDateWBy = (date:Date, lang:string, updated:boolean=false) : string => {
    const dateText = formatFullDate(date, lang)
    let prefix = ""
    let suffix = ""

    if (lang === "en"){
        prefix = !updated ? "Published on " : "Updated on "  
        suffix = " by"
    }
    
    else if (lang === "fr"){
        prefix = !updated ? "Publié " : "Mis à jour "
        suffix = " par"
    }

    return prefix + dateText + suffix + " "
}





interface BlogMetadata{
  // Define frontmatter props here
  title: string;
  description : string;
  author: string;
  pubDate: Date;
  image? : string;
  lang : string;
  tags : string[]
  url : string
}


// Dynamically import blog posts based on the language

// Use an immediately invoked async function and await its result
export async function fetchContentData(BlogPosts : Record<string, () => Promise<unknown>>) : Promise<BlogMetadata[]>{

    const posts: BlogMetadata[] = await (async () => {
        const fetched = [];
    
        let infos;
    
        for (const path in BlogPosts) {
            // Dynamically import each markdown file
    
            infos = await BlogPosts[path]() as any
            infos.frontmatter.url = infos.url
    
            // store url and metadata
            fetched.push(infos.frontmatter as BlogMetadata);
        }
        // Await and return all promises from the imports
        return fetched;
    })();
    
    // sorting by date
    posts.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime());
    

    return posts
}

