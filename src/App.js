import React, { useEffect, useState } from "react";
import "./App.css";

import ApiMovie from "./ApiMovie";
import MovieSection from "./components/MovieSection";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies();
      console.log(list);
      setMoviesList(list);
    };

    loadAllMovies();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
