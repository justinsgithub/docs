import React, { useState } from 'react';
import logo from '../images/css-portfolio-logo.png';
import streetbackground from '../images/steetbg.png';
import computers from '../images/computers-desktop.jpg';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/home.css';

const Project = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className={navOpen && 'nav-open'}>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="nav-toggle"
                        aria-label="toggle-navigation">
                        <span className="hamburger"></span>
                    </button>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="/"
                                    className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="/#services"
                                    className="nav__link">
                                    My Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="/#about"
                                    className="nav__link">
                                    About Me
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="/#work"
                                    className="nav__link">
                                    My Work
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    the title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">
                    full-stack developer
                </p>
                <img
                    src={streetbackground}
                    aria-label="computers"
                    className="intro__img"
                />
            </section>

            <div className="portfolio-item-individual">
                <p>
                    Cupidatat sint officia quis cillum ad cillum amet velit
                    cillum. Id in cillum non labore Lorem adipisicing fugiat
                    ipsum aute magna anim est minim minim. Deserunt fugiat
                    nostrud cillum enim.
                </p>{' '}
                <img src={computers} alt="" />
                <p>
                    Cupidatat sint officia quis cillum ad cillum amet velit
                    cillum. Id in cillum non labore Lorem adipisicing fugiat
                    ipsum aute magna anim est minim minim. Deserunt fugiat
                    nostrud cillum enim.
                </p>{' '}
                <p>
                    Cupidatat sint officia quis cillum ad cillum amet velit
                    cillum. Id in cillum non labore Lorem adipisicing fugiat
                    ipsum aute magna anim est minim minim. Deserunt fugiat
                    nostrud cillum enim.
                </p>
            </div>

            <footer className="footer">
                <a href="justinaawd@gmail.com" className="footer__link">
                    justinaawd@gmail.com
                </a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a href="/" className="social-list__link">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a href="/" className="social-list__link">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a href="/" className="social-list__link">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Project;
