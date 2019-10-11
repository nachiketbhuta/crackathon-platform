import React, { Component } from "react";
import "./App.css";
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Editor from './components/Editor';
import Wizard from './components/Wizard';
import Login from "./components/Login";

export default class App extends Component {

  componentWillMount() {
    document.body.style.background = "black";
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
          <Router>
            <Route exact path="/editor" component={Wizard} />
            <Route exact path="/" component={Login} />
          </Router>
      </DndProvider>

    );
  }
}