import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navbar, SideNav, routes } from "./Components/layout/Navbar";

//TODO:
/**
    - do the transition classes for navigating
    - make the sidebar touch and curve into the main page
 */

function App(props) {
  return (
    <Router>
      <div className="container-fluid app">
        <Route path="*">
          <div className="sidebar">
            <div>
              <header>
                <a href="/" className="brand-logo nav skip-link">
                  <i className="mdi mdi-dots-grid"></i>
                  Outlook
                </a>
              </header>
            </div>
            <SideNav {...props} />
          </div>
        </Route>

        <Route>
          <main className="main">
            <Navbar />
            <TransitionGroup>
              <CSSTransition classNames="my-node" timeout={500}>
                <Switch>
                  {routes.map((route, index) => (
                    <Route key={index} exact path={route.path}>
                      {route.component({
                        ...props,
                        icon: route.icon,
                        text: route.text,
                      })}
                    </Route>
                  ))}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>
        </Route>
      </div>
    </Router>
  );
}

export default App;
