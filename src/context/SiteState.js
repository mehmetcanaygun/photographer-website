import React, { useReducer } from "react";
import SiteContext from "./siteContext";
import SiteReducer from "./siteReducer";
import axios from "axios";
import {
  GET_PORT_IMAGES,
  CHANGE_CURRENT_SECTION,
  SET_LARGE_IMG,
  SET_LOADING
} from "./types";

const SiteState = props => {
  const initialState = {
    currentSection: "home",
    portImages: [],
    largeImg: null,
    loading: false
  };

  const [state, dispatch] = useReducer(SiteReducer, initialState);

  // Get Portfolio Images
  const getPortImages = async () => {
    setLoading();

    const res = await axios.get("./files/images.json");

    dispatch({
      type: GET_PORT_IMAGES,
      payload: res.data
    });
  };

  // Change Current Section
  const changeCurrentSection = section => {
    dispatch({
      type: CHANGE_CURRENT_SECTION,
      payload: section
    });
  };

  // Set Large Image
  const setLargeImage = img => {
    setLoading();

    dispatch({
      type: SET_LARGE_IMG,
      payload: img
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <SiteContext.Provider
      value={{
        currentSection: state.currentSection,
        portImages: state.portImages,
        largeImg: state.largeImg,
        loading: state.loading,
        getPortImages,
        changeCurrentSection,
        setLargeImage
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteState;
