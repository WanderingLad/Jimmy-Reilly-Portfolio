import React from 'react';
import { useDispatch } from 'react-redux';
import { ABOUT_ME, PROJECTS, CONTACT_ME } from '../page-utils/actions';

export default function Navigation() {
    const dispatch = useDispatch();

    return (
        <nav className="flex">

        <a id="about-me-nav" href="#about-me" onClick={() =>
                dispatch({
                  type: ABOUT_ME
                })
              }>About Me</a>

        <div className="dropdown">
            <button className="dropdown-button">Content</button>
            <ul className="dropdown-content">
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: PROJECTS
                })
              }>Discord Bot</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: PROJECTS
                })
              }>My Portfolio Code</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: PROJECTS
                })
              }>Project Stamina</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: PROJECTS
                })
              }>Seoul</a>
                </li>
            </ul>
        </div>

        <a id="contact-me-nav" href="#contact-me" onClick={() =>
                dispatch({
                  type: CONTACT_ME
                })
              }>Contact Me</a>
    </nav>
    )
}