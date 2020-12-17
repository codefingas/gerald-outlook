import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box; margin: 0;
  padding: 0;
  }

  body {
  overflow-x: hidden;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  

  nav {
  background-color: transparent !important;
}

nav ul a {
  color: #cad2dc !important;
  font-size: large;
}

nav form {
  margin: 0 !important;
}

.app {
  padding: 35px;
  padding-top: 0;
}

.brand-logo {
  display: inline-block;
  font-size: 1.5rem;
  padding: 0;
  padding-bottom: 30px;
  color: #f7f7f7 !important;
}

.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  /* left: 0; */
  overflow-x: hidden;
  padding-top: 20px;
  color: #e5f0fa !important;
}

.sidebar a {
  padding-top: 6px;
  padding-right: 8px;
  padding-bottom: 6px;
  padding-left: 16px;
  text-decoration: none;
  display: block;
}

.sidebar .active {
  z-index: 3;
}

.sidebar li:before,
.sidebar li:after,
.sidebars li a:before,
.sidebar li a:after {
  position: absolute;
  right: 0;
}

.sidebar .active:before,
.sidebar .active:after {
  background: white;
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
}

.sidebar li:before,
.sidebar li:after {
  background: white;
  width: 10px;
  height: 10px;
}

.sidebar li a:after,
.sidebar li a:before {
  width: 20px;
  height: 20px;
  /* background: black; */
}

.sidebar li a:before {
  margin-top: -20px;
  right: 0;
}

/**
  I am able to get the li and a to have boxes
      one needs to be a circle and another needs to be a square
      one moves and the other does not

      - the li would be stagnant and would shape over the <a>
*/

.sidebar .active a:after,
.sidebar .active a:before {
  background: grey;
  /* z-index: 5; */
}

.sidebar li.sidebar-links:before,
.sidebar li.sidebar-links:after {
  z-index: 0;
  background: grey;
  position: absolute;
  right: 0;
}

.sidebar li.sidebar-links:before,
.sidebar li.sidebar-links:after {
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.body};
  z-index: 1;
  right: 0;
}

.sidebar li.hide-curve:before,
.sidebar li.hide-curve:after {
  display: none !important;
}

.sidebar li.sidebar-links:before {
  margin-top: -20px;
  border-bottom-right-radius: 80%;
}

.sidebar li.active-curve:before {
    display: block !important;
}

.sidebar li.sidebar-links:after {
  border-top-right-radius: 80%;
}

.sidebar li.sidebar-links:after,
.sidebar li.sidebar-links:before {
  content: " ";
  display: block;
  /* position: absolute; */
}

.main {
  padding: 0 10px;
  background-color: #ffffff;
  margin-left: 200px;
  margin-top: 20px;
  z-index: 2;
  color: #d9dfe6 !important;
  padding-bottom: 1px;
  border-radius: 15px;
  height: 750px;
}

.sidebar i {
  margin-right: 25px;
}

.nav {
  margin-top: 20px;
}

div.tab {
  /* width: 95%; */
}

ul.tabItem {
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

ul.tabItem::-webkit-scrollbar {
  display: none;
}

ul.tabItem li {
  list-style: none;
  cursor: pointer;
}

ul.tabitem::-webkit-scrollbar:vertical {
  display: none !important;
}

nav form {
  width: 50%;
  height: 0% !important;
  margin-left: 25px !important;
}

label {
  color: #cad2dc !important;
}
nav input[type="search"] {
  border-bottom: 1px solid transparent !important;
  height: 15px !important;
  margin-top: -20px;
  margin-left: 20px !important;
}

nav input[type="search"]:focus {
  color: #000 !important;
}

nav i.searchbar {
  height: 0px;
}

ul.dropdown-content a {
  width: 100% !important;
  color: #000 !important;
}

ul li.navbar i {
  font-size: smaller !important;
}

nav .nav-wrapper i {
  line-height: unset !important;
}

.sidebar a.active i {
  color: ${({ theme }) => theme.body};
}

.sidebar a.active {
  background-color: #ffffff;
  color: #000 !important;
  /* p
  padding-right: 10px;
  padding-left: 10px; */
  /* padding-top: 15px; */
  /* padding-bottom: 15px; */
  padding-right: 2%;
  /* padding-left: 15px; */
  /* margin-left: -15px; */
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  /* background-size: 200px 200px; */
}

.sidebar a.active::after,
.sidebar a.active::before {
  content: " ";
  display: block;
  position: absolute;
  border-top-right-radius: -15px;
}

.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
/* 
.switch label .lever:after {
  background-color: #000 !important;
}

.switch label input[type=checkbox]:checked+.lever:after {
  background-color: #f1f1f1 !important;
} */

ul li.sidebar-links {
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 2%;
  padding-left: 15px;
  margin-left: -15px;
  margin-right: -10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 14px;
}

ul li.sidebar-links i {
  font-size: x-large !important;
}

.sidebar a {
  color: #e5f0fa !important;
}

.sidebar a.active {
  color: #303744 !important;
  font-weight: bolder !important;
}

.skip-link:focus {
  top: 0;
}

nav.messages_dropdown [class*="mdi-"] {
  display: unset !important;
}

li .card-panel {
  padding: 3px;
}

h4.brand-logo {
  font-size: unset !important;
  color: #000 !important;
}

.doite {
  margin-left: 25px !important;
}
.doite-cards-text-heading {
  font-size: 12px;
  margin-bottom: 0px;
  color: #b4b9c4 !important;
}

.doite-cards-text-content {
  line-height: 30px;
  font-size: 12px;
  color: #b4b9c4 !important;
}

div.doite-tabs {
  margin-bottom: 10px !important;
}

.doite-message {
  color: #424955;
}

nav [class*="mdi-"] {
  font-size: unset !important;
}

ul.tabItem .active {
  background-color: #f4f9fe !important;
}

ul.tabItem .active .doite-message {
  color: #3392dd !important;
}

ul.tabItem div.card-panel {
  box-shadow: unset !important;
}

.no-content-wrapper {
  height: 650px;
  width: auto;
}

.no-doite-content {
  height: 100%;
  width: 100%;
  margin-top: 20px;
  background-image: url("./assets/img/actions-hero.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;
  /* background */
}

.doite-content-view {
  padding-left: 60px;
}

.main .hide-content-on-small {
  display: block !important;
}

.main .hide-content-on-large {
  display: none !important;
}

.doite-content-view {
  padding-left: 35px !important;
}
@media only screen and (max-width: 600px) {
  body {
    overflow-y: hidden !important;
  }

  .app {
    overflow-x: hidden !important;
  }

  .doite nav ul a {
    padding: 0 5px;
  }

  .sm-content-text {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;
  }

  .doite {
    margin-left: 10px !important;
    /* padding-left: 20px; */
    /* padding-right: 20px;
     */
    padding: unset;
  }
  .navbar {
    /* background-color: #ffffff; */
    padding-left: 70% !important;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-right: 10px;
    margin-top: 7px;
    padding-right: 14px;
  }

  .sidebar {
    width: 0px;
  }

  .main {
    margin-left: 0px;
    overflow-y: hidden;
    overflow-x: hidden;
    padding: 0;
    margin-top: 0;
  }

  .no-content-wrapper {
    height: 325px;
    width: auto;
  }

  .no-doite-content {
    height: 50%;
    width: 50%;
    margin-top: 20px;
    background-image: url("./assets/img/actions-hero.png");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    background-size: cover;
    /* background */
  }

  .transparentBG {
    background-color: rgba(0, 0, 0, 0);
  }

  .mobile-nav-btn {
    margin-top: 10px;
  }

  .mobile-nav-btn i {
    font-size: x-large;
  }

  .show-on-small {
    display: block !important;
  }

  .space-main {
    padding-right: 0 !important;
  }

  .space-main .nav.show-on-small {
    padding-right: 10px !important;
  }

  .sidebar-main {
    width: 200px !important;
    margin-top: 50px;
  }

  .main .hide-content-on-small {
    display: none !important;
  }

  .main .hide-content-on-large {
    display: block !important;
  }

  .main-sidebar {
    margin-left: 200px !important;
    margin-right: -200px;
  }
  .doite-content-view {
    padding-left: 0px !important;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

  
  `;
