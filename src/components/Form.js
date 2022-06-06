import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=edbf65ac2f4d8c811990a555801878b4&query=${search}&language=fr-FR`
      )
      .then((res) => {
        // const data = Array.isArray(res.data) ? res.data : [res.data];
        setMoviesData(res.data.results);
      });
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder='Chercher le titre d"un film'
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Recherche" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            TOP
          </div>
          <div className="btn-sort" id="badToGood">
            FLOP
          </div>
        </div>
      </div>

      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Form;
