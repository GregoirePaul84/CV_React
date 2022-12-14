import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Aside = () => {

    const [scrollY, setScrollY] = useState(0);
    const [innerWidth, setInnerWidth] = useState(0);
    
    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        const handleWidth = () => {
            setInnerWidth(window.innerWidth);
        };

        handleWidth();
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleWidth);
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleWidth);
        };

    });


    return (
        <aside id='responsive-aside'>
            <div className="logo">
                <h1>G P</h1>
            </div>
            <div className="name-job-container">
                <h3 className='name'>Grégoire Paulet</h3>
                <h3 className='job'>Développeur web junior</h3>
            </div>
            {(scrollY >= 100 || innerWidth <= 840) ?
            <nav className='mobile-nav' id='tablet-mobile-nav'>
                <NavLink to={'/CV_React/home'}>
                    <div className="home-mobile">
                        <FontAwesomeIcon icon={faHouse} />
                        <h2>Accueil</h2>
                    </div>
                </NavLink>
                <NavLink to={'/CV_React/about'}>
                    <div className="about-mobile">
                        <FontAwesomeIcon icon={faAddressCard} />
                        <h2>À propos</h2>
                    </div>
                </NavLink>
                <NavLink to={'/CV_React/skills'}>
                    <div className="skills-mobile">
                        <FontAwesomeIcon icon={faCode} />
                        <h2>Compétences</h2>
                    </div>
                </NavLink>
                <NavLink to={'/CV_React/portfolio'}>
                    <div className="portfolio-mobile">
                        <FontAwesomeIcon icon={faBook} />
                        <h2>Portfolio</h2>
                    </div>
                </NavLink>
            </nav>
            : null }
        </aside>
    );
};

export default Aside;