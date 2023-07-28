import React, { useContext, Component, Fragment } from "react";
import App from "./App";
import { Navlink } from "react-router-dom";

import { AppContext, AppProvider, UseGlobalContext } from "./context";

const Movies = () => {
  const { movie } = UseGlobalContext();
  return (
    <section className="container movie-page">
      <div className="grid grid-4-col">
        {movie.map((currmovie) => {
          //const {imdbID,Title,Poster} = currmovie;
          return (
            //<Navlink to={`movie/${currmovie.imdbID}`} key={currmovie.imdbID}>
            <div className="card" key={currmovie.imdbID}>
              <div className="card-info">
                <h2>{currmovie.Title}</h2>
                <img src={currmovie.Poster} alt="" />
              </div>
            </div>
            //</Navlink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
