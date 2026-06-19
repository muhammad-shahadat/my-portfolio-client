import React from 'react';
// Lucide React Icons for Modern UI Look
import {
    Linkedin,
    Github,
    ExternalLink,
    Eye,
    Download,
    Mail,
    Phone,
    MessageSquareCode,

} from "lucide-react";
import { HashLink } from 'react-router-hash-link';

import heroLogo from "../assets/images/hero-logo.png";
import "./css/Home.css";



const Home = () => {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section id="hero">
                <div className="hero-container">
                    <div className="hero-logo">
                        <img src={heroLogo} alt="Shahadat Hossain" />
                    </div>
                    <div className="hero-right">
                        <div className="hero-des">
                            <h1>Shahadat Hossain</h1>
                            <p>
                                Full Stack Developer from Bangladesh specialized in building robust, scalable, and high-performance web applications using modern ecosystem stacks.
                            </p>
                        </div>
                        <ul className="hero-menu-list">
                            <li>
                                <a href="https://www.linkedin.com/in/shahadatian/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                            </li>
                            <li>
                                <a href="https://github.com/muhammad-shahadat" target="_blank" rel="noopener noreferrer">GITHUB</a>
                            </li>
                            <li>
                                <a href="https://github.com/muhammad-shahadat" target="_blank" rel="noopener noreferrer">PROJECTS</a>
                            </li>
                            <li>
                                <HashLink smooth to="#resume">RESUME</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT ME SECTION ================= */}
            <section id="about-me">
                <div className="about-container">
                    <div className="about-left">
                        <h2>ABOUT ME</h2>
                    </div>
                    <div className="about-right">
                        <p>
                            I am a passionate Full-Stack Developer and Software Engineering student at Daffodil International University, Bangladesh. I specialize in crafting secure, database-driven web architectures using the MERN and PERN (PostgreSQL, Express, React, Node.js) stacks. Experienced in modern state management (TanStack Query, Zustand) and building production-ready authentication systems, I focus on solving complex engineering problems like transaction handling and hierarchical schema design. I am actively open to junior roles, internships, and remote opportunities globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= PROJECTS SECTION ================= */}
            <section id="projects">
                <div className="projects-container">
                    <div className="projects-left">
                        <h2>PROJECTS</h2>
                    </div>
                    <div className="projects-right">

                        {/* Project 1: Quick-GPT (MERN Stack) */}
                        <div className="project-card project-css">
                            <h3 className="name">
                                <a className="name-link" href="https://shahadat-quick-gpt.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Quick-GPT – AI Chat & Image Generation App
                                </a>
                            </h3>
                            <p className="description">
                                A production-ready AI chat application powered by the Gemini AI API. Built with a MongoDB backend featuring full chat history persistence. Utilizes TanStack Query for optimistic UI updates and data caching. Secured via JWT with Access/Refresh Token rotation in HttpOnly cookies, email verification, and Passport.js integration.
                            </p>
                            <div className="project-links">
                                <h3 className="netlify">
                                    <a href="https://shahadat-quick-gpt.netlify.app/" className="netlify-link" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </h3>
                                <h3 className="github">
                                    <a href="https://github.com/muhammad-shahadat/quick-gpt" className="github-link" target="_blank" rel="noopener noreferrer">
                                        <Github size={18} /> GitHub Repository
                                    </a>
                                </h3>
                            </div>
                        </div>

                        {/* Project 2: Shopper (PERN Stack) */}
                        <div className="project-card project-css">
                            <h3 className="name">
                                <a className="name-link" href="https://shahadat-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Shopper – Scalable E-Commerce Platform
                                </a>
                            </h3>
                            <p className="description">
                                A full-stack monorepo featuring an infinite self-referencing category tree and a multi-attribute variant matrix. Engineered with PostgreSQL and Express using ACID-compliant transaction orchestration (pg-pool) to prevent stock race-conditions. Optimized with TanStack Query and Zustand for persistence, automated SEO slugs, and automated Cloudinary asset cleanups.
                            </p>
                            <div className="project-links">
                                <h3 className="netlify">
                                    <a href="https://shahadat-ecommerce.netlify.app/" className="netlify-link" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </h3>
                                <h3 className="github">
                                    <a href="https://github.com/muhammad-shahadat/e-commerce" className="github-link" target="_blank" rel="noopener noreferrer">
                                        <Github size={18} /> GitHub Repository
                                    </a>
                                </h3>
                            </div>
                        </div>


                        {/* Project 3: Authentication System (MySQL Stack) */}
                        <div className="project-card project-css">

                            <h3 className="name">
                                <a className="name-link" href="https://github.com/muhammad-shahadat/Node-Auth-System" target="_blank" rel="noopener noreferrer">
                                    Secure Full-Stack Authentication System
                                </a>
                            </h3>

                            {/* প্রজেক্টের ডেসক্রিপশন */}
                            <p className="description">
                                A production-ready RESTful authentication API built with Node.js, Express, and MySQL using connection pooling. Features secure JWT access and refresh token rotation orchestrated via HttpOnly cookies, complete email verification and password reset implementation using Nodemailer, and structured role-based access control (RBAC) with dedicated administrative management panels.
                            </p>

                            {/* শুধু গিটহাব লিংক কন্টেইনার (যেহেতু কোনো লাইভ ডেমো ইউআই নেই) */}
                            <div className="project-links">
                                <h3 className="github">
                                    <a href="https://github.com/muhammad-shahadat/Node-Auth-System" className="github-link" target="_blank" rel="noopener noreferrer">
                                        <Github size={18} /> GitHub Repository
                                    </a>
                                </h3>
                            </div>

                            {/* ব্যাকএন্ড প্রোজেক্টের জন্য বিশেষ নোট */}
                            <p className="note" style={{ color: "#475569", marginTop: "12px", fontSize: "14px" }}>
                                *Note: This is a robust backend core-system architecture focusing on deep API security, token orchestration, and database relational management.*
                            </p>
                        </div>

                        {/* Project 4: React Landing Page */}
                        <div className="project-card project-css">

                            <h3 className="name">
                                <a className="name-link" href="https://react-landing-page-shahadatian.netlify.app/" target="_blank" >
                                    React Landing Page

                                </a>
                            </h3>

                            <p className="description">
                                A modern and responsive langing page built with React, Vite, Tailwind CSS and custom CSS. Coded from a figam file shared in a youtube tutorial also help of the tutor.Features include reusable components, slick carousel for card slider.
                            </p>
                            <h3 className="netlify">
                                <a href="https://react-landing-page-shahadatian.netlify.app/" className="netlify-link" target="_blank" >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </h3>
                            <h3 className="github">
                                <a href="https://github.com/muhammad-shahadat/react-landing-page" className="github-link" target="_blank" >
                                    <Github size={18} /> GitHub Repository
                                </a>
                            </h3>
                            <p className="note" style={{ color: "#0f172a" }} >
                                *Note: Design credit goes to the original Figma creator. This was a practice implementation.*
                            </p>
                        </div>


                        {/* Project 5: Car Auction Landing Page */}
                        <div className="project-card project-css">
                            {/* প্রজেক্টের নাম ও লাইভ লিংক */}
                            <h3 className="name">
                                <a className="name-link" href="https://figma-to-html-conversion.netlify.app" target="_blank" rel="noopener noreferrer">
                                    Car Auction Landing Page
                                </a>
                            </h3>

                            {/* প্রজেক্টের ডেসক্রিপশন */}
                            <p className="description">
                                A fully responsive car auction landing page built from a Figma design using HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5. It features a pixel-perfect implementation of advanced search filters, active auction displays, popular car makes, and a custom-built responsive slider developed completely from scratch without external libraries.
                            </p>

                            {/* লাইভ ডেমো এবং গিটহাব লিংক কন্টেইনার */}
                            <div className="project-links">
                                <h3 className="netlify">
                                    <a href="https://figma-to-html-conversion.netlify.app" className="netlify-link" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </h3>
                                <h3 className="github">
                                    <a href="https://github.com/muhammad-shahadat/Figma-html" className="github-link" target="_blank" rel="noopener noreferrer">
                                        <Github size={18} /> GitHub Repository
                                    </a>
                                </h3>
                            </div>

                            {/* ডিজাইন ক্রেডিট ও নোট */}
                            <p className="note" style={{ color: "#0f172a", marginTop: "12px" }}>
                                *Note: Design credit goes to the original Figma creator. This was a frontend practice implementation focusing on UI/UX replication.*
                            </p>
                        </div>

                        {/* <div className="upcoming-project">

                        </div> */}

                    </div>
                </div>
            </section>

            {/* ================= SKILLS SECTION ================= */}
            <section id="skills">
                <div className="skills-container">
                    <div className="skills-left">
                        <h2>SKILLS</h2>
                    </div>
                    <div className="skills-right">
                        <div className="skill-category">
                            <h3 className="skill-title">Languages & Core</h3>
                            <ul className="skill-item">
                                <li className="item-list">JavaScript</li>
                                <li className="item-list">HTML</li>
                                <li className="item-list">CSS</li>
                                <li className="item-list">Java</li>
                                <li className="item-list">C / C++</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3 className="skill-title">Frontend Development</h3>
                            <ul className="skill-item">
                                <li className="item-list">React.js</li>
                                <li className="item-list">TanStack Query</li>
                                <li className="item-list">Zustand</li>
                                <li className="item-list">Tailwind CSS</li>
                                <li className="item-list">Bootstrap</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3 className="skill-title">Backend & Databases</h3>
                            <ul className="skill-item">
                                <li className="item-list">Node.js</li>
                                <li className="item-list">Express.js</li>
                                <li className="item-list">PostgreSQL</li>
                                <li className="item-list">MongoDB</li>
                                <li className="item-list">MySQL</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3 className="skill-title">Tools & Platforms</h3>
                            <ul className="skill-item">
                                <li className="item-list">Git & GitHub</li>
                                <li className="item-list">Postman</li>
                                <li className="item-list">Render / Netlify</li>
                                <li className="item-list">VS Code</li>
                                <li className="item-list">Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RESUME SECTION ================= */}
            <section id="resume">
                <div className="resume-container">
                    <div className="resume-left">
                        <h2>RESUME</h2>
                    </div>
                    <div className="resume-right">
                        <ul className="resume-item">
                            <li className="item-list resume-list">
                                <a href="/resume/shahadat_hossain_resume.pdf" target="_blank" className="resume-link view-resume" rel="noopener noreferrer">
                                    <Eye size={18} /> View Resume
                                </a>
                            </li>
                            <li className="resume-list item-list">
                                <a href="/resume/shahadat_hossain_resume.pdf" className="resume-link download-resume" download="md_shahadat_hossain_resume" rel="noopener noreferrer">
                                    <Download size={18} /> Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= CONTACTS SECTION ================= */}
            <section id="contacts">
                <div className="contacts-container">
                    <div className="contacts-left">
                        <h2>CONTACTS</h2>
                    </div>
                    <div className="contacts-right">
                        <p className="contact-desc">
                            I'm always open to exciting freelance or remote opportunities, project collaborations, or just a friendly tech chat. Feel free to reach out via email, phone, or WhatsApp. Let’s build something great together! 👇
                        </p>
                        <ul className="contact-item">
                            <li className="item-list">
                                <Mail size={18} className="contact-icon" />
                                <a href="mailto:shahadat6640@gmail.com" target="_blank" rel="noopener noreferrer">
                                    shahadat6640@gmail.com
                                </a>
                            </li>
                            <li className="item-list">
                                <MessageSquareCode size={18} className="contact-icon" />
                                <a href="https://wa.me/8801811293727?text=Hello%20Shahadat%2C%20I%20visited%20your%20portfolio%20and%20was%20impressed%20with%20your%20projects.%20I'd%20like%20to%20connect%20with%20you%20regarding%20a%20freelance%20or%20remote%20opportunity." target="_blank" rel="noopener noreferrer">
                                    WhatsApp: +880 1811-293727
                                </a>
                            </li>
                            <li className="item-list">
                                <Phone size={18} className="contact-icon" />
                                <a href="tel:+8801811293727">
                                    Personal: +880 1811-293727
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

