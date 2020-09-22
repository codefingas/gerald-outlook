/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "materialize-css";
import { Dropdown } from "react-materialize";
import DefaultPage from "../../views/defaultPage";
import Boite from "../../views/Boite/boite";

let style = {
  smallNav: { marginTop: "35px", marginBottom: "10px", marginLeft: "25px" }
};

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

export const SideNav = ({ showSidebar, sidebar }) => (
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
      <li className="sidebar-links" key={`${route.path}/${index}`}>
        <NavLink
          onClick={() => (sidebar ? showSidebar(!sidebar) : null)}
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
  </ul>
);

export const Navbar = () => (
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
          </ul>
        </div>
      </nav>
    </Fragment>
  </nav>
);
