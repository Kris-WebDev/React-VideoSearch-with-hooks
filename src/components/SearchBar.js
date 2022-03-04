import React, { useState } from "react";

//Destructured props name onFormSubmit from App.js
const Searchbar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  //add const for a function base component event handlers
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Preventing the App to refresh when using the <form> after pressing enter

    // assigning value of "term" to the props onFormSubmit which is located in the App.js
    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            placeholder="Search"
            type="text"
            value={term}
            onChange={onInputChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
