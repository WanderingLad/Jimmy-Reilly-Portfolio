import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

export default function Home() {
    return (
        <div class="col-10">
            <About />
            <Projects />
            <Contact />
        </div>
    );
}