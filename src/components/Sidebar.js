import React from 'react';
import { useDispatch } from 'react-redux';
import { ABOUT_ME, CONTACT_ME, PROJECTS, SPACE, PORTFOLIO } from '../utils/actions';

export default function About() {
    const dispatch = useDispatch();

    return (
        <aside className="d-flex col-2">
            <div class="d-grid h-25">
                <button onClick={() =>
                    dispatch({
                        type: ABOUT_ME
                    })
                }>About Me</button>

                <button onClick={() =>
                    dispatch({
                        type: CONTACT_ME
                    })
                }>Contact Me</button>

                <button onClick={() =>
                    dispatch({
                        type: PROJECTS
                    })
                }>Projects</button>

                <button onClick={() =>
                    dispatch({
                        type: SPACE
                    })
                }>SpaceWalk</button>
                <button onClick={() =>
                    dispatch({
                        type: PORTFOLIO
                    })
                }>Portfolio</button>
            </div>

            <div class="hr"></div>
        </aside>


    );
}