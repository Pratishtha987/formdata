import React from "react";
import FirstPage from "../components/HomePage/FirstPage";
import SecondPage from "../components/HomePage/SecondPage";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    // <Link to="home">
    <div>
      <FirstPage />
      <SecondPage />
    </div>
    // </Link>
  );
}

export default HomePage;
