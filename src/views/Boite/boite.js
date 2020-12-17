import React, { useState } from "react";
import "materialize-css";
import {
  Row,
  Col,
  CardPanel,
  // Navbar,
  Button,
  Dropdown,
} from "react-materialize";
import styled from "styled-components";
import ContentView from "../../Components/layout/contentView";

const style = {
  img: {
    borderRadius: "5px",
    width: "35px",
  },
};

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

  let [id, setId] = useState();

  const Container = styled.div`
    && {
      width: 100%;
    }
  `;

  const IconButton = styled.i`
        &&{
          color: "#b1b6c1";
          }
    `;

  const StyledButton = styled(Button)`
    && {
      margin-right: 0px;
      background-color: ${({ theme }) => theme.body};
    }
  `;

  return (
    <Container className="container">
      <Row className="doite">
        <Col
          className={`${id === undefined ? "" : "hide-content-on-small"}`}
          m={3}
          s={12}
        >
          <Row>
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
                    <IconButton className="mdi mdi-chevron-down">
                      <span className="hide">mdi mdi-chevron-down</span>
                    </IconButton>
                  </b>
                </span>
              }
            ></Dropdown>
            <StyledButton node="a" small className="right" waves="light">
              <i className="mdi mdi-plus"></i>
            </StyledButton>
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
                    <CardPanel
                      className={`${id === index ? "active" : ""} z-depth-1`}
                    >
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
    </Container>
  );
}

export default Boite;
