import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  ERROR_LOGIN,
  ERROR_UPDATE,
  UPDATE_PROFILE,
  CHANGE_AVATAR
} from "../actions/types";

const authReducer = (
  state = JSON.parse(localStorage.getItem("userLocal")),
  action
) => {
  switch (action.type) {
    case SIGN_UP:
      localStorage.setItem("userLocal", JSON.stringify(action.payload[1]));
      alert(action.payload[0].message);
      return action.payload[1];

    case SIGN_IN:
      localStorage.setItem("userLocal", JSON.stringify(action.payload));
      return action.payload;

    case SIGN_OUT:
      localStorage.clear();
      alert("You are successfully Logout");
      return false;

    case UPDATE_PROFILE:
      localStorage.setItem("userLocal", [
        JSON.stringify({ ...state, fullname: action.payload.fullname })
      ]);
      console.log(state, action.payload);
      alert("Data successfully updated");
      return action.payload;

    case CHANGE_AVATAR:
      localStorage.setItem(
        "userLocal",
        JSON.stringify({ ...state, image: action.payload.image })
      );
      alert("Data successfully updated");
      return action.payload;

    case ERROR_LOGIN:
      localStorage.clear();
      alert("Incorrect Email or Password Combination");
      return false;

    case ERROR_UPDATE:
      localStorage.clear();
      alert("Your Token is Expired, please do Sigin again");
      return false;

    default:
      return state;
  }
};

export default authReducer;
