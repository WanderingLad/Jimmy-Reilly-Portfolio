import React from 'react';
import { useDispatch } from 'react-redux';
import { SPACE, PORTFOLIO, STAMINA, BOUGIE } from '../utils/actions';

export default function Projects() {
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

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <figure>
                                <img id="bot" longdesc="" src={require("../images/Space.PNG")} alt="Space Walk" onClick={() => dispatch({ type: SPACE })} />
                                <figcaption>An open source peer-reviewed website that helps teach about our Solar System.</figcaption>
                            </figure>
                        </div>
                        <div class="carousel-item">
                            <figure>
                                <img id="code" src={require("../images/Portfolio.png")} alt="My Portfolio" onClick={() => dispatch({ type: PORTFOLIO })} />
                                <figcaption>My portfolio's code that I wrote.</figcaption>
                            </figure>
                        </div>
                        <div class="carousel-item">
                            <figure>
                                <img id="stamina" src={require("../images/Project-Stamina.jpg")} alt="Project Stamina" onClick={() => dispatch({ type: STAMINA })} />
                                <figcaption>Project Stamina is a Third-Person Action MOBA that I worked as a Gameplay Programmer on.</figcaption>
                            </figure>
                        </div>
                        1<div class="carousel-item">
                            <figure>
                                <img id="food" longdesc="" src={require("../images/Bougie.png")} alt="Bougie Foodie" onClick={() => dispatch({ type: BOUGIE })} />
                                <figcaption>Bougie Foodie helps you learn about the food you want to cook.</figcaption>
                            </figure>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>

    );
}
