import React from "react";
import Typed from "react-typed";

import { Jumbotron } from "react-bootstrap";

export default function HomeJumbotron() {
  return (
    <div>
      <Jumbotron>
        <h1 className="text-center display-3 font-weight-bold text-dark">
          <Typed
            strings={["Welcome to Coditor!"]}
            typeSpeed={70}
            backSpeed={70}
            loop
          />
        </h1>
        <p className="lead text-dark text-center pt-4">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
}
