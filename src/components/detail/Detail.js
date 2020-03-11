import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Detail.scss";
import Overview from "./Overview";
import Character from "./Character";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_DETAIL } from "../../../src/stores/actions/movie";

function Detail(props) {
  const overview = "overview";
  const character = "character";
  const review = "review";
  const [detail, setDetail] = useState(overview);
  const stateMovie = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTION_GET_DETAIL(props.match.params.id));
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

  return (
    <div className="Detail">
      <div className="container">
        <div className="banner">
          <img className="poster" src={stateMovie.poster} alt="" />
          <div className="banner-body flex x-center column">
            <div className="upper">
              <h1>{stateMovie.title}</h1>
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon
                className="icon-logo"
                icon={["fa", "star-half-alt"]}
              />
              <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
              &emsp;
              <span>{stateMovie.rating}/10</span>
              &emsp;
              <span>
                ( {(stateMovie.reviews && stateMovie.reviews.length) || 0}{" "}
                Reviews )
              </span>
            </div>
            <p>{stateMovie.synopsis}</p>
            <div className="link">
              <a href="/detail#">Watch Trailer</a>
              <a className="watch-list" href="/detail#">
                Add to Watchlist
              </a>
            </div>
          </div>
        </div>
        <div className="flex wrap link-wrapper">
          <span
            onClick={() => setDetail(overview)}
            className={detail === overview ? "active" : ""}
          >
            Overview
          </span>
          <span
            onClick={() => setDetail(character)}
            className={detail === character ? "active" : ""}
          >
            Characters
          </span>
          <span
            onClick={() => setDetail(review)}
            className={detail === review ? "active" : ""}
          >
            Review
          </span>
        </div>
        {detail === overview ? <Overview /> : false}
        {detail === character ? <Character /> : false}
        {detail === review ? <Review /> : false}
      </div>
    </div>
  );
}

export default Detail;
