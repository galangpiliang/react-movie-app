import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";
import "./Home.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_GET_MOVIE,
  ACTION_GET_GENRE
} from "../../../src/stores/actions/movie";

export default function Home() {
  const stateMovie = useSelector(state => state.movie);
  const dispatch = useDispatch();
  let Movie = "Loading...";
  let Genre = "Loading...";

  const getMovies = (page = 1) => {
    dispatch(ACTION_GET_MOVIE(page));
  };

  console.log(stateMovie);
  Movie =
    stateMovie.docs &&
    stateMovie.docs.map(movie => (
      <Link key={movie._id} to="/detail" className="movie-wrapper">
        <img src={movie.poster} alt="" />
        <strong className="ellipsis">{movie.title}</strong>
        <span className="ellipsis">
          {movie.genres.map(genre => genre.genre + ", ")}
        </span>
      </Link>
    ));

  Genre =
    stateMovie.docs &&
    stateMovie.genres.map(genre => (
      <a className="" href="/#">
        {genre.genre}
      </a>
    ));

  useEffect(() => {
    console.log("effect");
    getMovies();
    dispatch(ACTION_GET_GENRE());
    return () => {
      console.log("cleanup");
    };
  }, []);

  const pagination = [];

  if (stateMovie) {
    let response = stateMovie;

    if (response.prevPage)
      pagination.push(
        <h3
          key="page-prev"
          className="hover mx-1"
          onClick={() => getMovies(response.prevPage)}
        >
          &lt;
        </h3>
      );
    for (let i = 1; i <= response.totalPages; i++) {
      pagination.push(
        response.page === i ? (
          <h3 key={"page-" + i} className="current mx-1">
            {i}
          </h3>
        ) : (
          <h3
            key={"page-" + i}
            className="hover mx-1"
            onClick={() => getMovies(i)}
          >
            {i}
          </h3>
        )
      );
    }
    if (response.nextPage)
      pagination.push(
        <h3
          key="page-next"
          className="hover mx-1"
          onClick={() => getMovies(response.nextPage)}
        >
          &gt;
        </h3>
      );
  }

  return (
    <div className="Home">
      <div className="container">
        <Slider />
        {/* <Link to="/detail">Go Detail</Link> */}
        <h2> Browse by category</h2>
        <div className="flex wrap link-wrapper">
          <a className="active" href="/#">
            All
          </a>
          {Genre}
        </div>
        <div className="movie-group">{Movie}</div>
        {/* <div className="movie-group flex wrap between">{Movie}</div> */}
        <div className="flex link-wrapper wrap center">{pagination}</div>
      </div>
    </div>
  );
}
