import React, { Component, Fragment } from "react";

import MonacoEditor from "@uiw/react-monacoeditor";

import NavBar from "./Utilities/NavBar";
import Footer from "./Utilities/Footer";

export default class Editor extends Component {
  render() {
    return (
      <Fragment>
      <NavBar />
      <div style={{ position: 'relative', height: "500px", width: "100%" }}>
        <MonacoEditor
          language="javascript"
          value="<h1>I ♥ react-monacoeditor</h1>"
          options={{
            theme: "vs-dark"
          }}
        />
      </div>
      <Footer />
      </Fragment>
    );
  }
}
