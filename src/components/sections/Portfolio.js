import React, { useContext, useEffect } from "react";
import SiteContext from "../../context/siteContext";
import Spinner from "../layout/Spinner";
import PortItem from "./PortItem";
import LargeImage from "./LargeImage";

const Portfolio = () => {
  const siteContext = useContext(SiteContext);
  const { getPortImages, portImages, largeImg, loading } = siteContext;

  useEffect(() => {
    getPortImages();
    // eslint-next-line-disabled
  }, []);

  if (loading) return <Spinner />;

  return (
    <section
      className={
        siteContext.isPortfolioToggled
          ? "section-portfolio toggled"
          : "section-portfolio"
      }
    >
      <div className="section-portfolio__image">
        <LargeImage />
      </div>
      <div className="section-portfolio__container">
        {portImages.map(img => (
          <PortItem key={img.imgId} img={img} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
