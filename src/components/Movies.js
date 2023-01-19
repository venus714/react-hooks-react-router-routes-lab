import React from "react";
import { movies } from "../data";

function Movies() {
  const NewMovies=movies.map((movie)=>
  <div key={movie.title}>
   <h2> {movie.time}</h2>
    <ul>{movie.genres.map((genre)=>(
      <li key={genre}></li>
    ))}
    </ul>

  </div>
  )
  return(
      <div>
    <h1> Movies Page</h1>
    {NewMovies}



    </div>
  )
}

export default Movies;
