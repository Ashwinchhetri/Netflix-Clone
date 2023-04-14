import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleshow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true)
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll", []);
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
