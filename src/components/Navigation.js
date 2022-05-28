import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    
    return (
        <nav class="flex">

        <a id="about-me-nav" href="#about-me">About Me</a>

        <div class="dropdown">
            <button class="dropdown-button">Content</button>
            <ul class="dropdown-content">
                <li>
                    <a href="#portfolio" onclick="clickimage(document.getElementById('bot'), document.getElementById('bot-cap'), 'www.github.com/WanderingLad/Discord-Bot')">Discord Bot</a>
                </li>
                <li>
                    <a href="#portfolio" onclick="clickimage(document.getElementById('code'), document.getElementById('code-cap'), 'www.github.com/WanderingLad/Jimmy-Reilly-Portfolio')">My Portfolio Code</a>
                </li>
                <li>
                    <a href="#portfolio" onclick="clickimage(document.getElementById('stamina'), document.getElementById('stamina-cap'), 'www.projectstamina.com/')">Project Stamina</a>
                </li>
                <li>
                    <a href="#portfolio" onclick="clickimage(document.getElementById('seoul'), document.getElementById('seoul-cap'), 'www.fourseasons.com')">Seoul</a>
                </li>
            </ul>
        </div>

        <a id="contact-me-nav" href="#contact-me">Contact Me</a>
    </nav>
    )
}