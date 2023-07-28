import React, { useContext } from "react";
import App from "./App";
import { AppContext, AppProvider, UseGlobalContext } from "./context";

const Search = () => {
  const { query, setquery } = UseGlobalContext();
  return (
    <section className="search-section">
      <h2>Search your movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
