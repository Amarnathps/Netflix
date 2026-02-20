import { useParams } from "react-router-dom";
import { movies } from "../Datas/Datas";
import "./PosterDetails.css";

export default function PosterDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <h2 style={{ color: "white" }}>Movie not found</h2>;
  }

  return (
    <div style={{ color: "white", padding: "100px" }}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>⭐ {movie.rating}</p>

      <iframe
        width="100%"
        height="500"
        src={movie.trailer}
        title="Trailer"
        allowFullScreen
      />
    </div>
  );
}