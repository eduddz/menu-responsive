import c from './Header.module.scss';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <header className={c.header}>
            <div className={c.header_content}>
                <h2 className={c.header_content_logo}>navbar</h2>
                <nav className={`${c.header_content_nav} ${menuOpen ? c.isMenu : ''}`}>
                    <ul>
                        <li>
                            <a href="/">PageOne</a>
                        </li>
                        <li>
                            <a href="/">PageTwo</a>
                        </li>
                        <li>
                            <a href="/">PageThree</a>
                        </li>
                    </ul>
                    <button>Contact Page</button>
                </nav>
                <div className={c.header_content_toggle} onClick={() => setMenuOpen(!menuOpen)}>
                    { menuOpen ? <BiMenuAltRight /> : <AiOutlineClose /> }
                </div>
            </div>
        </header>
    )
}