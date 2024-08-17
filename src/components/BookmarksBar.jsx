import './BookmarksBar.css';

export const BookmarksBar = () => {
    return (
        <ul className='bookmarksBar'>
            <BookmarkLink 
                iconSrc='https://xvideos.com/favicon.ico'
                href="https://x.com"
                openIn='newTab'
            />

            <BookmarkLink 
                iconSrc='https://store.steampowered.com/favicon.ico'
                href="https://youtube.com"
                openIn='sameTab'
            />
        </ul>
    )
}

/** @param {{ iconSrc: string, href: string, openIn: "newTab" | "sameTab" }} props */
const BookmarkLink = ({ iconSrc, href = "", openIn }) => {
    return (
        <li className='bookmarkLink'>
            <a 
                href={href} 
                target={openIn === 'newTab' ? "_blank" : "_self"}
            >
                <img src={iconSrc} width='24' height='24' />
            </a>
        </li>
    )
}