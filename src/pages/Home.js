import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

export default function Home() {
    return (
        <div>
            <About />
            <Projects />
            <Contact />
        </div>
    );
}