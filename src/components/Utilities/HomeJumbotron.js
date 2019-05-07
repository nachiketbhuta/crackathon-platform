import React from 'react';

import { Jumbotron } from 'reactstrap';

import Typed from 'react-typed';

export default function HomeJumbotron() {

  return (
    <div>
        <Jumbotron className="bg-grey" style={{ height: '250px', marginBottom: '0px' }}>
          <h1 className="display-3 font-weight-bold text-dark text-center">
            <Typed
              strings={['Welcome to Coditor!']}
              typeSpeed={70}
              backSpeed={70}
              loop
            />
            </h1>
          <p className="lead text-dark text-center pt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, perspiciatis..
          </p>
      </Jumbotron>
    </div>
  )
}
