import React from "react";
import "./MovieSection.css";

function MovieSection({ title, items }) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              alt="film- poster"
            />
          ))}
      </div>
    </div>
  );
}

export default MovieSection;
