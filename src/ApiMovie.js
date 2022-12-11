const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}&language=fr-FR&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export default {
  getMovies: async () => {
    return [
      {
        slug: "top-rated",
        title: "Mieux notés",
        items: await fetchMovies("movie/top-rated"),
      },
      {
        slug: "upcoming",
        title: "Prochaines sorties",
        items: await fetchMovies("movie/upcoming"),
      },
      {
        slug: "trend-allweek",
        title: "Tendancess",
        items: await fetchMovies("trending/all/week"),
      },
      {
        slug: "action",
        title: "Action",
        items: await fetchMovies("movie?with_genre=28"),
      },
      {
        slug: "horror",
        title: "Horreur",
        items: await fetchMovies("movie?with_genre=27"),
      },
      {
        slug: "romance",
        title: "Romantique",
        items: await fetchMovies("movie?with_genre=10749"),
      },
      {
        slug: "comedy",
        title: "Comédies",
        items: await fetchMovies("movie?with_genre=35"),
      },
      {
        slug: "documentary",
        title: "Documentaires",
        items: await fetchMovies("movie?with_genre=99"),
      },
      {
        slug: "popular-tv",
        title: "Séries populaires",
        items: await fetchMovies("tv/popular"),
      },
      {
        slug: "popular-tv",
        title: "Séries populaires",
        items: await fetchMovies("tv/popular"),
      },
      {
        slug: "popular-tv",
        title: "Séries populaires",
        items: await fetchMovies("tv/popular"),
      },
    ];
  },
};
