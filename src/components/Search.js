import React from "react";
import { GetContext } from "./context";

const Search = () => {
  const { query, setQuery, error } = GetContext();

  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{error.show && error.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
