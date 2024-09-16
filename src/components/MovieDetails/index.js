import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  console.log({ movieId });

  let movieChoice = movies.find((item) => String(item.id) === movieId);
  console.log(movieChoice.title + " " + movieChoice.description);

  return (
    <div className="comp purple">
      <h1> {movieChoice.title}</h1>
    </div>
  );
}

export default MovieDetails;
