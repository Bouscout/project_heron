// logo

import { type FC } from "react" 
import { getRelativeLocaleUrl } from 'astro:i18n';


interface Props {
    lang : string | undefined
}

const Logo:FC<Props>= ({ lang }) => {
    const homeUrl = lang ? getRelativeLocaleUrl(lang, "/") : "/"
    // const homeUrl = lang ? "/"+lang : "/"


    return (
        <a href={homeUrl} id="logo">
            <p>Digital Poetry</p>
            <img src="/logo.webp"  alt="logo" />
        </a>
    )
}

export default Logo