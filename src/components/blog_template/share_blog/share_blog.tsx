
// component for the sharing icon

import type { FC } from "react"

import "./share_blog.scss"

const BASE_URL = import.meta.env.BASE_URL

interface Props {
    title : string,
    url : string,
    prefix : string
}

const ShareOnSocialMedia:FC<Props> = ({title, url, prefix}) => {
    return (
        <div className="share-social">

            <span>@Digital Poetry</span>

            <div>
            <span>{prefix}</span> 

            <Social linkType="twitter" baseURL="http://twitter.com/share" icon="fa-brands fa-square-x-twitter" title={title} url={url} />

            <DefaultShareButton linkType="whatsapp" baseURL={BASE_URL} icon="fa-brands fa-square-whatsapp" title={title} url={url} />

            <DefaultShareButton linkType="reddit" baseURL={BASE_URL} icon="fa-brands fa-square-reddit" title={title} url={url} />

            <DefaultShareButton linkType="facebook" baseURL={BASE_URL} icon="fa-brands fa-square-facebook" title={title} url={url} />
            </div>
        </div>
    )
}

interface SocialProps {
    linkType : string
    baseURL : string
    title : string
    url : string
    icon : string
}

const Social:FC<SocialProps> = ({ linkType, baseURL, title, url, icon }) =>{
    
    const shareLink = `${baseURL}?text=${title}&url=${url}`

    return (
        <a aria-label={linkType} href={shareLink} target="_blank">
            <i aria-hidden className={icon} ></i>
        </a>
    )
}

const DefaultShareButton:FC<SocialProps> = ({ baseURL, title, url, icon }) => {
    const share = () =>{
        navigator.share({
            title : title,
            url : `${baseURL}/${url}`
        })
    }

    return (
        <p onClick={()=>share()}>
            <i className={icon} ></i>
        </p>
    )
}

export default ShareOnSocialMedia