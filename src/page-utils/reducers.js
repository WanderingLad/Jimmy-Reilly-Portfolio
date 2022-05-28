import { ABOUT_ME, PROJECTS, CONTACT_ME } from './actions';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

const initalState = {
    page: 
      {
        activePage: <Home />,
      }
  };

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ABOUT_ME: {
      return {
        ...state,
        page: {activePage: <About />}
      };
    }
    case PROJECTS: {
      return {
        ...state,
        page: {activePage: <Projects />},
      };
    }
    case CONTACT_ME: {
      return {
        ...state,
        page: {activePage: <Contact />},
      };
    }
    default: {
      return state;
    }
  }
}
