import { GET_MOVIE, LOADING, GET_GENRE, GET_DETAIL } from "./types";
import Axios from "axios";
const baseUrl = "https://awesome-movie-data.herokuapp.com/api/v1";

export const ACTION_GET_MOVIE = (pageNumber = 1, query = false) => {
  return dispatch => {
    console.log("ACTION_GET_MOVIE");
    dispatch({ type: LOADING });
    let endPoint = `${baseUrl}/movies/all/?page=${pageNumber}`;
    console.log(query);
    if (query.like) {
      endPoint = `${baseUrl}/movies/search/?like=${query.like}&page=${pageNumber}`;
    } else if (query.genre) {
      endPoint = `${baseUrl}/movies/genre?genre=${query.genre}&page=${pageNumber}`;
    }
    Axios.get(endPoint)
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_MOVIE,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        // dispatch({
        //   type: ERROR_LOGIN,
        //   payload: error
        // });
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_GET_DETAIL = (id = false) => {
  return dispatch => {
    console.log("ACTION_GET_DETAIL");
    dispatch({ type: LOADING });
    let endPoint = `${baseUrl}/movies?movieId=${id}`;
    // https://awesome-movie-data.herokuapp.com/api/v1/movies?movieId=5e60f74c3993c70017791957
    Axios.get(endPoint)
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_MOVIE,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        // dispatch({
        //   type: ERROR_LOGIN,
        //   payload: error
        // });
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_GET_GENRE = () => {
  return dispatch => {
    console.log("ACTION_GET_GENRE");
    dispatch({ type: LOADING });
    Axios.get(`${baseUrl}/movies/allgenre`)
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_GENRE,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        // dispatch({
        //   type: ERROR_LOGIN,
        //   payload: error
        // });
        dispatch({ type: LOADING });
      });
  };
};
