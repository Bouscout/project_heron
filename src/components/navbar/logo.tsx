// logo

import { type FC } from "react" 
import { getRelativeLocaleUrl } from 'astro:i18n';


interface Props {
    lang : string | undefined
}

const Logo:FC<Props>= ({ lang }) => {
    const homeUrl = lang ? getRelativeLocaleUrl(lang, "/") : "/"

    return (
        <a href={homeUrl} id="logo">
            <img src="/logo.jpg"  alt="logo" />
            <p>Digital Poetry</p>
        </a>
    )
}

export default Logo