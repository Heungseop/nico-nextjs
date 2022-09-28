import { useEffect, useState } from "react";
import Seo from "../components/Seo";
// https://api.themoviedb.org/3/movie/550?api_key=398fc33d535b607cd418e11e510d1aa9
const API_KEY = "398fc33d535b607cd418e11e510d1aa9";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home">
        <title>Home | Next Mobies</title>
      </Seo>
      {!movies && <h4>Loading...</h4>}
      {movies.map((m) => (
        <div key={m.id}>
          <h4>{m.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
