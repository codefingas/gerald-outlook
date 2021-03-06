import React, { useEffect, useState, Fragment } from "react";
import "materialize-css";
import { Row, Navbar } from "react-materialize";

const ContentView = ({ id, messages, setId }) => {

  const links = [
    {
      icon: "mdi mdi-subdirectory-arrow-left mdi-flip-v",
    },
    {
      icon: "mdi mdi-trash-can-outline",
    },
    {
      icon: "mdi mdi-archive-outline",
    },
    {
      icon: "mdi mdi-cancel",
    },
    {
      icon: "mdi mdi-tag-outline",
    },
    {
      icon: "mdi mdi-dots-horizontal",
    },
  ];

  let [message, setMessage] = useState(null);
  useEffect(() => {
    let [message] = messages.filter((message) => message.id === id);
    return setMessage(message);
  }, [id, messages]);

  return (
    <div>
      {message ? (
        <Fragment>
          <Row className="hide-content-on-small">
            <Navbar
              className="messages_dropdown z-depth-0"
              alignLinks="right"
              brand={
                <h4>
                  <b>{message.name}</b>
                </h4>
              }
              id="mobile-nav"
              menuIcon={<i className="mdi mdi-menu"></i>}
              options={{
                draggable: true,
                edge: "left",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true,
              }}
            >
              {links.map((link, index) => (
                <a key={index} href="#/">
                  <i className={link.icon}></i>
                </a>
              ))}
            </Navbar>
          </Row>

          <nav className="hide-content-on-large">
            <div className="nav-wrapper">
              <ul>
                <li
                  style={{ paddingRight: "px" }}
                  onClick={() => setId(undefined)}
                >
                  <a href="#/">
                    <i className="mdi mdi-arrow-left"></i>
                  </a>
                </li>
                <li style={{ marginRight: "-1px" }} className="black-text">
                  {message.name}
                </li>
                {links.map((link, index) => (
                  <li key={`content-view-${index}`}>
                    <a key={index} href="#/">
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <Row>
            <div className="row">
              <p className="sm-content-text">{message.text}</p>
            </div>
          </Row>
        </Fragment>
      ) : (
        <div className="no-content-wrapper">
          <div className="no-doite-content responsive-img"></div>
        </div>
      )}
    </div>
  );
};

export default ContentView;
