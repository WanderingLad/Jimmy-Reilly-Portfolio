import React from 'react';
import { useDispatch } from 'react-redux';
import { ABOUT_ME, DISCORD, PORTFOLIO, STAMINA, BOUGIE , CONTACT_ME } from '../utils/actions';

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
                  type: DISCORD
                })
              }>Discord Bot</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: PORTFOLIO
                })
              }>My Portfolio Code</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: STAMINA
                })
              }>Project Stamina</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() =>
                dispatch({
                  type: BOUGIE
                })
              }>Bougie Foodie</a>
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