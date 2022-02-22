import React, { useState } from 'react';
import logo from '../images/css-portfolio-logo.png';
import meAndMom from '../images/me-and-mom.jpg';
import myself from '../images/myself.jpeg';
import computers from '../images/computers-desktop.jpg';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/home.css';

const Home = () => {
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
                                    href="#home"
                                    className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="#services"
                                    className="nav__link">
                                    My Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="#about"
                                    className="nav__link">
                                    About Me
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    onClick={() => setNavOpen(!navOpen)}
                                    href="#work"
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
                    Hi, i'm <strong>Justin Tyler</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">
                    full-stack developer
                </p>
                <img
                    src={myself}
                    aria-label="computers"
                    className="intro__img"
                />
            </section>
            <section className="my-services" id="services">
                <h2 clasName="section__title section__title--services">
                    What I Do
                </h2>
                <div className="services">
                    <div className="service">
                        <h3>Backend Development</h3>
                        <p>
                            Cupidatat sint officia quis cillum ad cillum amet
                            velit cillum. Id in cillum non labore Lorem
                            adipisicing fugiat ipsum aute magna anim est minim
                            minim. Deserunt fugiat nostrud cillum enim.
                        </p>
                    </div>
                    <div className="service">
                        <h3>Frontend Development</h3>
                        <p>
                            Cupidatat sint officia quis cillum ad cillum amet
                            velit cillum. Id in ciria-labelang fugiat ipsum aute
                            magna anim est minim minim. Deserunt fugiat nostrud
                            cillum enim.
                        </p>
                    </div>
                    <div className="service">
                        <h3>Linux Command Line</h3>
                        <p>
                            Cupidatat sint officia quis cillum ad cillum amet
                            velit cillum. Id in cillum non labore Lorem
                            adipisicing fugiat ipsum aute magna anim est minim
                            minim. Deserunt fugiat nostrud cillum enim.
                        </p>
                    </div>
                </div>
                <a href="#work" className="btn">
                    My Work
                </a>
            </section>

            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">
                    Who I Am
                </h2>
                <p className="section__subtitle section__subtitle--about">
                    full stack developer from the PNW
                </p>
                <div clasName="about-me__body">
                    <p>
                        Cupidatat sint officia quis cillum ad cillum amet velit
                        cillum. Id in cillum non labore Lorem adipisicing fugiat
                        ipsum aute magna anim est minim minim. Deserunt fugiat
                        nostrud cillum enim.
                    </p>
                    <p>
                        Cupidatat sint officia quis cillum ad cillum amet velit
                        cillum. Id in cillum non labore Lorem adipisicing fugiat
                        ipsum aute magna anim est minim minim. Deserunt fugiat
                        nostrud cillum enim.
                    </p>
                </div>
                <img
                    src={meAndMom}
                    alt="justin and mom"
                    className="about-me__img"
                />
            </section>

            <section className="my-work" id="work">
                <h2 className="section__title section__title--work">My Work</h2>
                <p className="section__subtitle section__subtitle--work">
                    My favorite projects
                </p>

                <div className="portfolio">
                    <a href="/project" className="portfolio__item">
                        <img
                            src={computers}
                            alt="computers"
                            className="portfolio__img"
                        />
                    </a>
                    <a href="/project" className="portfolio__item">
                        <img
                            src={computers}
                            alt="computers"
                            className="portfolio__img"
                        />
                    </a>
                    <a href="/project" className="portfolio__item">
                        <img
                            src={computers}
                            alt="computers"
                            className="portfolio__img"
                        />
                    </a>
                    <a href="/project" className="portfolio__item">
                        <img
                            src={computers}
                            alt="computers"
                            className="portfolio__img"
                        />
                    </a>

                    <a href="/project" className="portfolio__item">
                        <img
                            src={computers}
                            alt="computers"
                            className="portfolio__img"
                        />
                    </a>

                    <a href="/project" className="portfolio__item">
                        <img
                            src={computers}
                            alt="computers"
                            className="portfolio__img"
                        />
                    </a>
                </div>
            </section>
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

export default Home;
