import { HOME, ABOUT_ME, PROJECTS, CONTACT_ME, DISCORD, PORTFOLIO, STAMINA, BOUGIE } from './actions';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

const initalState = {
  page:
  {
    activePage: <Home />,
    activeImage: require("../images/Space.PNG"),
    activeDescription: "An open source peer-reviewed website that helps teach about our Solar System.",
    activeLink: `https://fierce-chamber-88860.herokuapp.com/`,
    activeAlt: "Space Walk"
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case HOME: {
      return {
        ...state,
        page: { ...state.page, activePage: <Home /> }
      };
    }
    case ABOUT_ME: {
      return {
        ...state,
        page: { ...state.page, activePage: <About /> }
      };
    }
    case PROJECTS: {
      return {
        ...state,
        page: { ...state.page, activePage: <Projects /> },
      };
    }
    case CONTACT_ME: {
      return {
        ...state,
        page: { ...state.page, activePage: <Contact /> },
      };
    }
    case SPACE: {
      return {
        ...state,
        page: {
          ...state.page,
          activeImage: require("../images/Space.PNG"),
          activeDescription: "An open source peer-reviewed website that helps teach about our Solar System.",
          activeLink: `https://fierce-chamber-88860.herokuapp.com/`,
          activeAlt: "Space Walk"
        }
      };
    }
    case PORTFOLIO: {
      return {
        ...state,
        page: {
          ...state.page,
          activeImage: require("../images/Portfolio.png"),
          activeDescription: "I created this portfolio as part of my web coding bootcamp at Georgia Tech. I'm still very proud of it to this day because it reminds me just how far I've come.",
          activeLink: `https://www.github.com/WanderingLad/Jimmy-Reilly-Portfolio`,
          activeAlt: "My Portfolio"
        },
      };
    }
    case STAMINA: {
      return {
        ...state,
        page: {
          ...state.page,
          activeImage: require("../images/Project-Stamina.jpg"),
          activeDescription: "Project Stamina is a Third-Person Action MOBA that I worked as a Gameplay Programmer on. I created core systems as well as a few playable characters while working there.",
          activeLink: `https://www.projectstamina.com/`,
          activeAlt: "Project Stamina"
        },
      };
    }
    case BOUGIE: {
      return {
        ...state,
        page: {
          ...state.page,
          activeImage: require("../images/Bougie.png"),
          activeDescription: "Bougie Foodie is a project I created with classmates at Georgia Tech's Web Coding Bootcamp with a team of other fledgling developers.",
          activeLink: `https://www.github.com/WanderingLad/BougieFoodie`,
          activeAlt: "Bougie Foodie"
        },
      };
    }
    default: {
      return state;
    }
  }
}
