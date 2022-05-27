import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    
    return (
    <nav>
        <a href="#Home" onClick={() => handlePageChange('Home')}>Home</a>
        <a href="#AboutMe" onClick={() => handlePageChange('About')}>About Me</a>
        {/* <a href="#MySkills">My Skills</a> */}
        <a href="#MyPortfolio" onClick={() => handlePageChange('Projects')}>Portfolio</a>
        <a href="#ContactMe" onClick={() => handlePageChange('Contact')}>Contact Me</a>
    </nav>
    )
}