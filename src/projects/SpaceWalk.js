import React from 'react';
import { useSelector } from 'react-redux';

export default function SpaceWalk() {
    const state = useSelector((state) => state);

    return (
        <section>
            <div>
                <h2>SpaceWalk</h2>
                <div className="top-portfolio">
                    <figure>
                        <div className="main-image-wrapper flex">
                            <img id="change-img" src={state.page.activeImage} alt={state.page.activeAlt} />
                            <button className="port-button" onClick={() => window.open(state.page.activeLink, "_blank")}>Go to Project</button>
                        </div>
                        <p id="change-p">
                            {state.page.activeDescription}
                        </p>

                    </figure>
                </div>
            </div>
        </section>

    );
}
