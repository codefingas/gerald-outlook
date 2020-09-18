import React from "react";
const style = {
  div: {
    backgroundColor: "#0278d5",
  },
  li: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
};
const links = [
  {
    icon: "mdi mdi-calendar-blank",
  },
  {
    icon: "mdi mdi-cog-outline",
  },
  {
    icon: "mdi mdi-help-circle-outline",
  },
  {
    icon: "mdi mdi-bullhorn-outline",
  },
  {
    icon: "mdi mdi-account-outline",
  },
];

const Navbar = () => (
  <nav className="z-depth-0">
    <div className="nav-wrapper" style={style.div}>
      <a href="/" className="brand-logo">
        <i className="mdi mdi-dots-grid"></i>
        Outlook
      </a>
      <ul id="nav-mobile" className="right navbar hide-on-med-and-down">
        {links.map((v, index) => (
          <li key={index} className="gerald-vanish" style={style.li}>
            <i className={`small ${v.icon}`}></i>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
export default Navbar;
