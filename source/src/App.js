import { useState } from "react";
import Header from "../src/component/Header";
import Card  from "./component/MovieCard";
import Form from "./component/Form";
import "./App.css";

function App() {
  const [query, setQuarry] = useState("");
  const [movie, setMovie] = useState([]);

  const searchForMovies = async (e) => {
    e.preventDefault();
      const APIKEY = "da420b86771b9f3c36fb68be17477680";
      // const query = "Batman";
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`;
  
      const response = await fetch(URL);
      const data = await response.json();
      setMovie(data.results);
  };
  function onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <form className="myForm" onSubmit={searchForMovies} onKeyUp={onKeyUp}>
        <label className="myLabel" htmlFor="query">
          Movie Name:{" "}
        </label>
        <input
          className="myInput"
          type="text"
          name="query"
          placeholder="Search for movie, tv show... God?"
          value={query}
          onChange={(e) => setQuarry(e.target.value)}
        />
        <button className="myBtn" type="submit">
          <i className="fas fa-search"></i>Search
        </button>
      </form>
      <Card movie={movie} />
      </div>

  );
}

export default App;
// https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t5mbrd79o89pYB8OQ4QPFNkIRPm.jpg
