import React from "react";
// import PropTypes from "prop-types";

const Navbar = () => {
  const elements = {
    icon: "bi bi-github",
    title: "Gitgub Finder",
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className={elements.icon}></i> {elements.title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
