import React from "react";

function Card(props){
    const movie = props.movie
    return(
        <div className="cardMovieList">
        {movie.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt="poster"
            />
            <div className="cardTextFormat">
            <h2>{item.title}</h2>
            <h4
              className={
                item.vote_average <= 6 ? "avrgRating-red" : "avrgRating-green"
              }
            >
              Average Rating: {item.vote_average} Voted: {item.vote_count}
            </h4>
            <h4>Release: {item.release_date}</h4>
            <p>{item.overview}</p>
          </div>
          </div>
        ))}
      </div>

    )
}


export default Card