import React from 'react';
import { useDispatch } from 'react-redux';
import { ABOUT_ME, CONTACT_ME, PROJECTS, SPACE } from '../utils/actions';

export default function About() {
    const dispatch = useDispatch();

    return (
        <nav className="d-flex col-2">
            <div class="d-grid">
                <a class="h3" href="#" onClick={() =>
                    dispatch({
                        type: ABOUT_ME
                    })
                }>About Me</a>

                <a class="h3" href="#" onClick={() =>
                    dispatch({
                        type: CONTACT_ME
                    })
                }>Contact Me</a>

                <a class="h3" href="#" onClick={() =>
                    dispatch({
                        type: PROJECTS
                    })
                }>Projects</a>

                <a class="h5" href="#" onClick={() =>
                    dispatch({
                        type: SPACE
                    })
                }>SpaceWalk</a>
            </div>

            <div class="hr"></div>
        </nav>


    );
}