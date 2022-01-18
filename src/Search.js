import React from "react";

function Search({ handleChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
export default Search;
