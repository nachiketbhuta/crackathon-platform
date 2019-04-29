import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark" dark style={{ height: "50px" }}>
        <NavbarBrand className="mx-auto">
          <div className="footer-copyright text-center pb-4">
            <p className="footer-text text-light">
              &copy; 2019 Made with <i className=" love fa fa-heartbeat" /> for
              you!
            </p>
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
