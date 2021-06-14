import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="col-12 text-end">
      <NavLink
      to="/"
      exact
      className=""
      activeClassName="router-link-exact-active">
      Home&nbsp;
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className=""
      activeClassName="router-link-exact-active">
      Profile
    </NavLink>
  </div>
);

export default MainNav;
