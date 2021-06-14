import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
      <nav className="row bg-light">
            <MainNav />
            <AuthNav />
      </nav>
  );
};

export default NavBar;
