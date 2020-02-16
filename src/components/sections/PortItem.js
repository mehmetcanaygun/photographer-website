import React, { useContext } from "react";
import SiteContext from "../../context/siteContext";

const PortItem = ({ img: { imgId, imgPath, imgText } }) => {
  const siteContext = useContext(SiteContext);
  const { setLargeImage } = siteContext;

  return (
    <div
      className="port-img"
      onClick={() => {
        setLargeImage({ imgId, imgPath, imgText });
      }}
    >
      <img src={imgPath} />
    </div>
  );
};

export default PortItem;
