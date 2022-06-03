import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1>TEST</h1>
      <li>{props.movie.budget} </li>
    </div>
  );
};

export default Card;
