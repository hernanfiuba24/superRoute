import React from 'react';
import "./Banner.css";

const backOfficeNname="SuperRoute";

const Banner = () => {
  return (
    <div className="banner">
      <div className="containerBanner">
        <h1 className="logo-font">
          {backOfficeNname}
        </h1>
        <p>Encuentre el mejor camino para hacer sus compras</p>
      </div>
    </div>
  );
};

export default Banner;
