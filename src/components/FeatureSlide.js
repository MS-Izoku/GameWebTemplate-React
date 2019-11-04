import React from "react";
import Img from 'react-image'

const FeatureSlide = props => {
  return (
    <div className="col card view mx-1 px-0 border-0 container-fluid">
      <Img
        className="card-img"
        src={[props.feature.display_img]}
        alt={`key-feature-${props.feature.id + 3121}`}
        decode={false}
      />


      <div className="card-img-overlay container">
        <h2 className="card-title text-white text-center ">
          {props.feature.name}
        </h2>
        <hr className="bg-white" />
        <p className="card-text text-white">{props.feature.description}</p>
      </div>

    </div>
  );
};

export default FeatureSlide;
