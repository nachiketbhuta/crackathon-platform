import React from "react";

import { Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar bg="dark" style={{ height: "50px" }}>
        <Navbar.Brand className="mx-auto">
          <div className="footer-copyright text-center pb-4">
            <p className="footer-text text-light h5 pt-4">
              &copy; 2019 Made with <i className=" love fa fa-heartbeat" /> for
              you!
            </p>
          </div>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
