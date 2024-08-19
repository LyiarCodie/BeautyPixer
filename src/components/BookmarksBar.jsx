import { useState, useEffect } from 'preact/hooks';
import { CreateBookmarkModal } from './CreateBookmarkModal';
import { Plus } from '@phosphor-icons/react'

import './BookmarksBar.css';
import './CreateBookmarkModal.css';
import './DropdownMenu.css';

/**
 * @typedef {Object} Bookmark
 * @prop    {string} title
 * @prop    {string} iconSrc
 * @prop    {string} href
 * @prop    {"newTab" | "sameTab"} openIn
 */

export const BookmarksBar = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [bookmarkTitle, setBookmarkTitle] = useState("");
    const [bookmarkURL, setBookmarkURL] = useState("");
    const [openIn, setOpenIn] = useState(false);
    const [bookmarksList, setBookmarksList] = useState(
        [
            {
                title: "X",
                iconSrc: "https://xvideos.com/favicon.ico",
                href: "https://x.com",
                openIn: "newTab"
            },
            {
                title: "Steam",
                iconSrc: "https://store.steampowered.com/favicon.ico",
                href: "https://youtube.com",
                openIn: "sameTab"
            }
        ]
    );

    /**
     * @param {string} title
     * @param {string} iconSrc
     * @param {string} href
     * @param {"newTab" | "sameTab"} openIn
     */
    const createBookmark = (title, iconSrc, href, openIn) => {
        return {
            title, 
            iconSrc, 
            href, 
            openIn: openIn ? "newTab" : "sameTab"
        }
    }

    const createModalCallback = () => {
        const bookmark = createBookmark(bookmarkTitle, "https://xvideos.com/favicon.ico", bookmarkURL, openIn);
        bookmarksList.push(bookmark);
        setBookmarksList(bookmarksList);
        resetModalInputs();
        closeModalCallback();
    };

    /** @param {InputEvent} event */
    const onURLInputChangeCallback = (event) => {
        setBookmarkURL(event.target.value);
    };

    /** @param {InputEvent} event */
    const onTitleInputChangeCallback = (event) => {
        setBookmarkTitle(event.target.value);
    };

    /** @param {InputEvent} event */
    const onOpenInChange = (event) => {
        const { checked } = event.target;

        setOpenIn(checked);
    }

    const openModalCallback = () => {
        setModalVisibility(true);
    };

    const closeModalCallback = () => {
        setModalVisibility(false);
        resetModalInputs();
    };

    const resetModalInputs = () => {
        setBookmarkTitle("");
        setBookmarkURL("");
        setOpenIn(false);
    };

    return (
        <ul className='bookmarksBar'>
            {
                bookmarksList.map(({href, iconSrc, openIn}) => (
                    <BookmarkLink 
                        href={href}
                        iconSrc={iconSrc}
                        openIn={openIn}
                    />
                ))
            }

            <DropdownMenu />

            <AddBookmark 
                onAddBookmarkClick={openModalCallback} 
            />
            <CreateBookmarkModal 
                open={modalVisibility}
                onCancelClick={closeModalCallback}
                onSaveClick={createModalCallback}
                onTitleInputChange={onTitleInputChangeCallback}
                onURLInputChange={onURLInputChangeCallback}
                onOpenInChange={onOpenInChange}
                bookmarkTitleState={bookmarkTitle}
                bookmarkURLState={bookmarkURL}
                openInState={openIn}
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

/** @param {{ onAddBookmarkClick: () => void }} param0 */
const AddBookmark = ({onAddBookmarkClick}) => {
    return (
        <li className='bookmarkLink'>
            <button onClick={onAddBookmarkClick}>
                <Plus size={24} />
            </button>
        </li>
    )
}

const DropdownMenu = () => {

    useEffect(() => {
        /**
         * @param {Event} e 
         */
        const contextMenu = (e) => {
            e.preventDefault();
            console.log("must open a custom contextMenu!");
        }
        window.addEventListener("contextmenu", contextMenu)
    }, [])

    return (
        <div className="dropdownMenu">
            <button>Delete Bookmark</button>
            <div className="input-block">
                <label htmlFor="">Open in new tab</label>
                <input type="checkbox" name="" id="" />
            </div>            
        </div>
    )
}