import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SPACE, PORTFOLIO, STAMINA, BOUGIE } from '../utils/actions';

export default function Projects() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

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
                            <img id="change-img"  src={state.page.activeImage} alt={state.page.activeAlt} />
                            <button className="port-button" onClick={()=> window.open(state.page.activeLink, "_blank")}>Go to Project</button>
                        </div>
                        <p id="change-p">
                            {state.page.activeDescription}
                        </p>

                    </figure>
                </div>

                <div className="bottom-portfolio grid">
                    <figure className="thumbnail">

                        <img id="bot" longdesc="" src={require("../images/Space.PNG")} alt="Space Walk" onClick={() =>dispatch({type: SPACE})}/>
                        <figcaption>An open source peer-reviewed website that helps teach about our Solar System.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="code" src={require("../images/Portfolio.png")} alt="My Portfolio" onClick={() =>dispatch({type: PORTFOLIO})}/>
                        <figcaption>My portfolio's code that I wrote.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="stamina" src={require("../images/Project-Stamina.jpg")} alt="Project Stamina" onClick={() =>dispatch({type: STAMINA})}/>
                        <figcaption>Project Stamina is a Third-Person Action MOBA that I worked as a Gameplay Programmer on.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="food" longdesc="" src={require("../images/Bougie.png")} alt="Bougie Foodie" onClick={() =>dispatch({type: BOUGIE})}/>
                        <figcaption>Bougie Foodie helps you learn about the food you want to cook.</figcaption>

                    </figure>

                </div>
            </div>
        </section>

    );
}
