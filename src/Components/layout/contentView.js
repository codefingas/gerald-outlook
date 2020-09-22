import React, { useEffect, useState, Fragment } from "react";
import "materialize-css";
import { Row, Navbar } from "react-materialize";

const ContentView = ({ id, messages }) => {
  console.log("THE ID", id);
  //TODO:create a lookup map for features

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
    console.log("THE MESSAGE", message);
    return setMessage(message);
  }, [id, messages]);

  return (
    <div>
      {message ? (
        <Fragment>
          <Row>
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
          <Row>
            <div className="row">
              <p>{message.text}</p>
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
