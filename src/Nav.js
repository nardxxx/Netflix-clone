import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css'

// import './Requests.js'

const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    className='nav__logo'
                    src="/logo.png"
                    alt="NetflixLogo"
                    onClick={() => history.push("/")}
                />
                <img
                    onClick={() => history.push("/profile")}
                    className='nav__avatar'
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="logo"
                />
            </div>
        </div >
    );
};

export default Nav;