import React from 'react';

export default function Contact() {
    return (
        <section id="contact-me" className="contact-me ">
            <div className="inside-section">
                <h2>
                    Contact Me
                </h2>
                <p>
                    Phone: <a href="tel:6783717576">678-371-7576</a>
                </p>
                <p>
                    Email: <a href="mailto: jreilly2112@gmail.com">jreilly2112@gmail.com</a>
                </p>
                <p>
                    Github: <a href="https://github.com/WanderingLad">WanderingLad</a>
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/james-reilly-6ba523158/">LinkedIn</a>
                </p>
                <p>
                    My Resume: <a href="./Assets/James Reilly Resume.pdf" download="James Reilly Resume">Download it as a PDF</a>
                </p>
            </div>
        </section>
    );
}