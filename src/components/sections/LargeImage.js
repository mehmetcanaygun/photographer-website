import React, { Fragment, useContext } from "react";
import SiteContext from "../../context/siteContext";

const LargeImage = () => {
  const siteContext = useContext(SiteContext);
  const { portImages, largeImg, loading } = siteContext;

  if (largeImg === null) return null;

  return (
    <Fragment>
      <img src={largeImg.imgPath} alt="large-image" />
      <p>{largeImg.imgText}</p>
    </Fragment>
  );
};

export default LargeImage;
