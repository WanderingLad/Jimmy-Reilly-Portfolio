import React from 'react';

export default function Projects() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="inside-section">
                <h2>
                    My Past Work
                </h2>
                <hr />
                <p>
                    Click on the images below to highlight them. If you're interested in the project, just hover over the big image and click the link!
                </p>

                <div className="top-portfolio">
                    <figure>
                        <div className="main-image-wrapper flex">
                            <img id="change-img" src="/public/Assets/Images/Code-Snippet.png" alt="Discord Bot" />
                            <button className="port-button">Go to Project</button>
                        </div>
                        <p id="change-p">
                            This is a project I've made utilizing Discord's python api to play music, send messages, and post links.
                        </p>
                        <p id="change-link">
                            https://github.com/WanderingLad/Discord-Bot
                        </p>

                    </figure>
                </div>

                <div className="bottom-portfolio grid">
                    <figure className="thumbnail">

                        <img id="bot" longdesc="" src="/public/Assets/Images/Code-Snippet.png"/>
                        <figcaption>A discord bot that can play music, message users, and do basic commands.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="code" src="./Assets/Images/Portfolio.png"/>
                        <figcaption>My portfolio's code that I wrote.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="stamina" src="/public/Assets/Images/Project-Stamina.jpg"/>
                        <figcaption>Project Stamina is a Third-Person Action MOBA that I worked as a Gameplay Programmer on.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="food" longdesc="" src="./Assets/Images/Bougie.png"/>
                        <figcaption>Bougie Foodie helps you learn about the food you want to cook.</figcaption>

                    </figure>

                </div>
            </div>
        </section>

    );
}