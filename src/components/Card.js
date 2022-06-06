import React from "react";

const Card = ({ movie }) => {
  const transformDate = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt="affiche du film"
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sortie le : {transformDate(movie.release_date)} </h5>
      ) : (
        ""
      )}
      <h4>{movie.vote_average}/10 </h4>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      <div className="btn">J'aime ce film</div>
    </div>
  );
};

export default Card;
