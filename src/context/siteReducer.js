import {
  GET_PORT_IMAGES,
  CHANGE_CURRENT_SECTION,
  SET_LARGE_IMG,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_PORT_IMAGES:
      return {
        ...state,
        portImages: action.payload,
        loading: false
      };
    case CHANGE_CURRENT_SECTION:
      return {
        ...state,
        currentSection: action.payload
      };
    case SET_LARGE_IMG:
      return {
        ...state,
        largeImg: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
