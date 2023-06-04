import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">

      <div>
        <div className="search">
          <Link to="/">
            <img
              src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_66.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Movie</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
