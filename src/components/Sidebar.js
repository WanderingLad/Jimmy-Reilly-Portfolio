import React from 'react';
import { useDispatch } from 'react-redux';
import { ABOUT_ME, CONTACT_ME, PROJECTS } from '../utils/actions';

export default function About() {
    const dispatch = useDispatch();

    return (
        <nav className="d-flex col-2">
            <div class="d-grid">
                <a href="#" onClick={() =>
                    dispatch({
                        type: ABOUT_ME
                    })
                }>About Me</a>

                <a href="#" onClick={() =>
                    dispatch({
                        type: CONTACT_ME
                    })
                }>Contact Me</a>

                <a href="#" onClick={() =>
                    dispatch({
                        type: PROJECTS
                    })
                }>Projects</a>
            </div>

            <div class="hr"></div>
        </nav>


    );
}