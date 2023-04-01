import React, { useState } from "react";

function Search({ searchUserHandler, clearResultHandler }) {
  const [key, setKey] = useState("");

  const onChangeHandler = (e) => {
    setKey(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    searchUserHandler(key);
    setKey("");
  };

  return (
    <div className="container my-3">
      <form onSubmit={searchHandler}>
        <div className="input-group">
          <input
            value={key}
            onChange={onChangeHandler}
            type="text"
            className="form-control"
            placeholder="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <button
        onClick={clearResultHandler}
        className="btn btn-outline-danger mt-3 btn-block"
      >
        Clear Results
      </button>
    </div>
  );
}

export default Search;
