import React, { useState, useEffect } from "react";
import "materialize-css";
import {
  Row,
  Col,
  CardPanel,
  Navbar,
  Button,
  Dropdown,
} from "react-materialize";
import ContentView from "../../Components/layout/contentView";

const style = {
  img: {
    borderRadius: "5px",
    width: "35px",
  }
};

//TODO: THE FIRST ITEM HAS THE DROP DOWN OF THE SORT OVER IT - TAKE THAT AWAY
/*
    - remove the tabs box shadow *done
    - hide the scrollbar for the tabs
*/


  /**
   * how do I manage toggling hide and show on large screens
   *    - a mobile value is passed
   *        - how is the mobile value generated and what does it alter
   */

function Boite() {
  let messages = [
    {
      id: 0,
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      name: "Sandra Adams",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 1,
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      name: "Ali Connors",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      name: "Ali Connors",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Trevor Hansen",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 4,
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      name: "Tucker Smith",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 5,
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 6,
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 7,
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 8,
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 9,
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 10,
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 11,
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Britta Holt",
      time: "8:56",
      topic: "C'est chouchou que je veux",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];
  useEffect(() => {
    //fetch data here
  }, []);
  let [id, setId] = useState();


  /**
   * I am trying to get the main to show in large screen and hide on small screen
   *      - 
   */
    


  return (
    <div className="container-fluid">
      <Row className="doite">
        <Col className={`${id === undefined ? "": "hide-content-on-small"}`} m={3} s={12}>
          <Row>
            <Navbar
              className="messages_dropdown z-depth-0"
              alignLinks="right"
              brand={
                <Dropdown
                  id="Dropdown_7"
                  style={{ width: "100%", color: "#000" }}
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
                    <span style={{ color: "#444956" }} node="button" href="#/">
                      <b>
                        Prioritaire{" "}
                        <i
                          style={{ color: "#b1b6c1" }}
                          className="mdi mdi-chevron-down"
                        >
                          <span className="hide">mdi mdi-chevron-down</span>
                        </i>
                      </b>
                    </span>
                  }
                >
                </Dropdown>
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
              <Button
                node="a"
                small
                style={{
                  marginRight: "0px",
                  backgroundColor: "#0278d5",
                }}
                waves="light"
              >
                <i className="mdi mdi-plus"></i>
              </Button>
            </Navbar>
          </Row>
          <Row>
            <div className="tab">
              <ul className="tabItem">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    onClick={() => setId(index)}
                    className="hoverable"
                  >
                    <CardPanel className={`${id === index ? "active" : ""} z-depth-1`}>
                      <Row className="valign-wrapper doite-tabs">
                        <Col m={2}>
                          <img
                            style={style.img}
                            alt={message.avatar}
                            src={message.avatar}
                          />
                        </Col>
                        <Col m={10}>
                          <Row className="doite-cards-text-heading">
                            <Col m={6}>{message.name}</Col>
                            <Col m={6}>
                              <div className="right-align">{message.time}</div>
                            </Col>
                          </Row>
                          <div className="doite-cards-text-content">
                            <p className="doite-message">
                              <b>{message.topic}</b>
                            </p>
                            <p className="truncate">{message.text}</p>
                          </div>
                        </Col>
                      </Row>
                    </CardPanel>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Col>
        <Col m={9} s={12} className="doite-content-view">
          <ContentView setId={setId} messages={messages} id={id} />
        </Col>
      </Row>
    </div>
  );
}

export default Boite;
