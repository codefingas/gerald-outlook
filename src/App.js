// import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navbar, SideNav, routes } from "./Components/layout/Navbar";


function App(props) {
  const [theme, setTheme] = useState(true);
  const [sidebar, showSidebar] = useState(true);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
       

        <Router>
          <div className={`container-fluid app ${sidebar ? "space-main" : ""}`}>
            <nav className="z-depth-0 hide show-on-small">
              <div className="nav-wrapper">
                <a href="#/" className="brand-logo left">
                  <i className="mdi mdi-dots-grid"></i>
                  Outlook
                </a>

                <button
                  onClick={() => showSidebar(!sidebar)}
                  className="btn right btn-flat mobile-nav-btn white-text"
                >
                  <i className="mdi mdi-menu"></i>
                </button>
              </div>
            </nav>
            <Route path="*">
              <div className={`${sidebar ? "sidebar-main" : ""} sidebar`}>
                <div>
                  <header className="hide-on-small-only">
                    <a href="/" className="brand-logo nav skip-link">
                      <i className="mdi mdi-dots-grid"></i>
                      Outlook
                    </a>
                  </header>
                </div>
                <SideNav
                  sidebar={sidebar}
                  showSidebar={showSidebar}
                  theme={theme} 
                  switchTheme={setTheme}
                  {...props}
                />
              </div>
            </Route>

            <Route>
              <main className={`${sidebar ? "main-sidebar" : ""} main`}>
                <Navbar theme={theme} switchTheme={setTheme}/>
                <TransitionGroup>
                  <CSSTransition className="my-node" timeout={1000}>
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
      </>
    </ThemeProvider>
  );
}

export default App;
