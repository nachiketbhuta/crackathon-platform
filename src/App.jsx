import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen';
import Editor from './components/Editor';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <Fragment>
      <Router>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/editor" component={Editor} />
				<Route exact path="/login" component={LoginForm} />
			</Router>
    </Fragment>
  )
}
