import React, { useContext, useEffect, useState } from "react";
const API_URL = `https://www.omdbapi.com/?apikey=d2e5529e&`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [Error, setIsError] = useState({ show: false, msg: "" });
  const [query, setquery] = useState("titanic");
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setMovie(data.Search);
        setIsLoading(false);
      } else {
        setIsError({
          show: true,
          msg: data.error
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => getMovies(`${API_URL}s=${query}`), 800);

    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isloading, movie, Error, query, setquery }}>
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, UseGlobalContext };
