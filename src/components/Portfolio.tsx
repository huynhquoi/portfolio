"use client"

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Experiences from "./Experiences";

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-blue-950">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <About />
            <Experiences />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio