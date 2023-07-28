import React, { useContext } from "react";
import App from "./App";
import { AppContext, AppProvider, UseGlobalContext } from "./context";
import Search from "./search";
import Movies from "./Movies";
import { Navlink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Search />
      <Movies />
    </div>
  );
};

export default Home;
