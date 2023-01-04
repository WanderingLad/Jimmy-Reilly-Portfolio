import React from 'react';

export default function About() {
    return (
        <section id="about-me" className="about-me">
            <div className="inside-section">
                <h2>
                    About Me
                </h2>

                <p>
                    Hey there! My name is James Reilly, but most people just call me Jimmy. I'm based out of Dahlonega, Georgia and currently work for a little company called
                    <a href="https://appstudios.net/" target="_blank" rel="noreferrer">App Studios</a>. Currently I work as a Full Stack Developer utilizing HTML, CSS, PHP, and JavaScript to
                    create and maintain WordPress websites <b>for over 30 unique clients</b>.

                </p>

                <p>
                    Previously I've attended Gwinnett Technical College where I received my Associate's in Game Development and Design. From there I have worked a handful of internships
                    with various studios across the country. I've programmed things such as AI Logic, System Programming, and UI/UX Design just to name a few.
                </p>
                <p>
                    Outside of working, generally you'll find me playing video games on my PC, or coding in python making scripts for fun. I spend a lot of time at my computer
                    but I still try to get outisde, when it's not <i>too</i> sunny out.
                </p>
                <p>
                    Check out my <a href="#portfolio">portfolio</a> below. It has some pretty cool projects that I'm very proud of. If you have any questions, feel free to
                    <a href="#contact-me"> contact me </a>about them.
                </p>
            </div>
        </section>
    );
}