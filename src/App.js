import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navbar, SideNav, routes } from "./Components/layout/Navbar";

//TODO:
/**
    - do the transition classes for navigating
    - make the sidebar touch and curve into the main page
 */

function App(props) {
  const [sidebar, showSidebar] = useState(false);
  return (
    <Router>
      <div className={`container-fluid app ${sidebar ? "space-main" : ""}`}>
        <nav className="z-depth-0 hide show-on-small">
          <div className="nav-wrapper">
            <a href="#/" className="brand-logo left">
            <i className="mdi mdi-dots-grid"></i>
              Outlook
            </a>
            <button onClick={() => showSidebar(!sidebar)} className="btn right btn-flat mobile-nav-btn white-text">
              <i className="mdi mdi-menu"></i>
            </button>
          </div>
        </nav>
        <Route path="*">
          <div className={`${sidebar ? "sidebar-main" :  ""} sidebar`}>
            <div>
              <header className="hide-on-small-only">
                <a href="/" className="brand-logo nav skip-link">
                  <i className="mdi mdi-dots-grid"></i>
                  Outlook
                </a>
              </header>
            </div>
            <SideNav sidebar={sidebar}  showSidebar={showSidebar} {...props} />
          </div>
        </Route>

        <Route>
          <main className={`${sidebar ? "main-sidebar" :  ""} main`}>
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
