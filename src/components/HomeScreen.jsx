import React from "react";

import NavBar from './Utilities/NavBar';
import HomeJumbotron from './Utilities/HomeJumbotron';
import Footer from "./Utilities/Footer";

export default function HomeScreen() {
  return (
    <div>
        <NavBar />
        <HomeJumbotron />
        <Footer />
    </div>
  );
}
