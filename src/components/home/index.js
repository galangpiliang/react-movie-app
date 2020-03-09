import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";
import "./Home.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_GET_MOVIE,
  ACTION_GET_GENRE
} from "../../../src/stores/actions/movie";
import { SEARCH } from "../../stores/actions/types";

export default function Home() {
  const stateMovie = useSelector(state => state.movie);
  const stateSearch = useSelector(state => state.search);
  const dispatch = useDispatch();
  let Movie = "Loading...";
  let Genre = "Loading...";

  const getMovies = (page = 1) => {
    console.log(stateSearch);
    dispatch(ACTION_GET_MOVIE(page, stateSearch));
  };

  // console.log(stateMovie);
  Movie =
    stateMovie.docs &&
    stateMovie.docs.map(movie => (
      <Link key={movie._id} to="/detail" className="movie-wrapper">
        <img src={movie.poster} alt="" />
        <strong className="ellipsis">{movie.title}</strong>
        <span className="ellipsis">
          {movie.genres && movie.genres.map(genre => genre.genre + ", ")}
        </span>
      </Link>
    ));

  Genre =
    stateMovie.genres &&
    stateMovie.genres.map(genre => (
      <a
        key={genre._id}
        className={stateSearch.genre === genre.genre ? "active" : ""}
        onClick={() => {
          dispatch({
            type: SEARCH,
            payload: {
              genre: genre.genre
            }
          });
          dispatch(
            ACTION_GET_MOVIE(1, {
              genre: genre.genre
            })
          );
        }}
      >
        {genre.genre}
      </a>
    ));

  useEffect(() => {
    console.log("effect");
    dispatch(ACTION_GET_GENRE());
    dispatch(ACTION_GET_MOVIE());
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

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
          <a className={stateSearch.genre ? "" : "active"} href="/#">
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
