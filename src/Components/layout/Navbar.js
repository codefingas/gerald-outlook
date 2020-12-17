/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "materialize-css";
import { Dropdown } from "react-materialize";
import DefaultPage from "../../views/defaultPage";
import Boite from "../../views/Boite/boite";
import {lightTheme, darkTheme} from "../../theme";

let style = {
  smallNav: { marginTop: "35px", marginBottom: "10px", marginLeft: "25px" },
};

const ToggleBtn = styled.label`
  && {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  && input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${darkTheme.body};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${lightTheme.body};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    top: -2px;
    left: 12px;
    width: 22px;
    border: unset;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const routes = [
  {
    icon: "mdi mdi-inbox-outline",
    text: "Boite de Reception",
    path: "/",
    component: (props) => <Boite {...props} />,
  },
  {
    icon: "mdi mdi-cancel",
    text: "Courrier indesirables",
    path: "/courrier",
    component: (props) => <DefaultPage {...props} />,
  },
  {
    icon: "mdi mdi-pencil-outline",
    text: "Brouillons",
    path: "/brouillons",
    component: (props) => <DefaultPage {...props} />,
  },
  {
    icon: "mdi mdi-send-outline mdi-rotate-315",
    text: "Elements envoyes",
    path: "/envoyes",
    component: (props) => <DefaultPage {...props} />,
  },
  {
    icon: "mdi mdi-trash-can-outline",
    text: "Elements supprimes",
    path: "/supprimes",
    component: (props) => <DefaultPage {...props} />,
  },
  {
    icon: "mdi mdi-inbox-outline",
    text: "Archives",
    path: "/archives",
    component: (props) => <DefaultPage {...props} />,
  },
  {
    icon: "mdi mdi-note-outline",
    text: "Notes",
    path: "/notes",
    component: (props) => <DefaultPage {...props} />,
  },
];

const links = [
  {
    icon: "mdi mdi-calendar-blank",
    path: "#/",
  },
  {
    icon: "mdi mdi-cog-outline",
    path: "#/",
  },
  {
    icon: "mdi mdi-help-circle-outline",
    path: "#/",
  },
  {
    icon: "mdi mdi-bullhorn-outline",
    path: "#/",
  },
  {
    icon: "mdi mdi-account-outline",
    path: "#/",
  },
];

export const SideNav = ({ showSidebar, sidebar, theme, switchTheme }) => {
  const [isActiveHere, setActiveClass] = useState(0);
return (
  <ul>
    <Dropdown
      id="Dropdown_6"
      style={{ width: "100%", color: "#ffffffcc" }}
      options={{
        alignment: "left",
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250,
      }}
      trigger={
        <li>
          <a node="button">
            <b>
              Dozziers{" "}
              <i className="mdi mdi-chevron-down">
                <span className="hide">mdi mdi-chevron-down</span>
              </i>
            </b>
          </a>
        </li>
      }
    >
      <a href="#/">one</a>
      <a href="#/">two</a>
      <a href="#/">three</a>
      <a href="#/">four</a>
      <a href="#/">five</a>
    </Dropdown>
    {routes.map((route, index) => (
      <li className={`sidebar-links ${isActiveHere === index ? 'active-curve': 'hide-curve'}`} key={`${route.path}/${index}`}>
        <NavLink
          onClick={() => (sidebar ? showSidebar(!sidebar) : null)}
          isActive={(match) => {
            if(match){
              setActiveClass(index);
               return true;
            }
            else {
              return false;
            }
          }}
          exact
          to={route.path}
        >
          <span className="sidebar-text">
            <i className={route.icon}>
              <span className="hide">{route.icon}</span>
            </i>
            {route.text}
          </span>
        </NavLink>
      </li>
    ))}
    <li>
      <ToggleBtn>
        <input type="checkbox" onChange={() => switchTheme(!theme)} />
        <span className="slider round"></span>
      </ToggleBtn>
      <br/>
      Switch Theme
    </li>
  </ul>
);
}


export const Navbar = ({ theme, switchTheme}) => (
  <nav className="z-depth-0">
    <Fragment>
      <form>
        <Fragment>
          <label className="label-icon" htmlFor="search">
            <i className="searchbar mdi mdi-magnify">
              <span className="hide">mdi mdi-magnify</span>
            </i>
            <input
              placeholder="Rechercher"
              id="search"
              type="search"
              required
            />
          </label>
        </Fragment>
      </form>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path}>
              <i className={link.icon}>
                <span className="hide">{link.icon}</span>
              </i>
            </a>
          </li>
        ))}
      </ul>

      <nav style={style.smallNav} className="hide-content-on-large z-depth-0">
        <div className="nav-wrapper">
          <ul className="center">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path}>
                  <i className={link.icon}>
                    <span className="hide">{link.icon}</span>
                  </i>
                </a>
              </li>
            ))}
            <li>
              <ToggleBtn>
                <input type="checkbox" onChange={() => switchTheme(!theme)} />
                <span className="slider round"></span>
              </ToggleBtn>
              <br/>
              Switch theme
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  </nav>
);
