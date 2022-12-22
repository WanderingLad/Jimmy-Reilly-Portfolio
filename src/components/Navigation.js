import React from 'react';
import { useDispatch } from 'react-redux';
import { ABOUT_ME, CONTACT_ME } from '../utils/actions';

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <nav className="flex">

      <a id="about-me-nav" href="#about-me" onClick={() =>
        dispatch({
          type: ABOUT_ME
        })
      }>About Me</a>

      <a id="contact-me-nav" href="#contact-me" onClick={() =>
        dispatch({
          type: CONTACT_ME
        })
      }>Contact Me</a>
    </nav>
  )
}