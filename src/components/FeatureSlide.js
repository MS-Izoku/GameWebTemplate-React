import React from "react";
import Img from "react-image";

const FeatureSlide = props => {
  return (
    <div className="row view mx-1 px-0 border-0 container-fluid">
      {props.inversePositions ? (
        <>
          <Img
            className="col-lg-6 col-sm-6 col bg-danger w-100 img-responsive"
            src={[props.feature.display_img ? props.feature.display_img : null]}
            alt={`key-feature-${props.feature.id + 3121}`}
            decode={false}
          />
          <div className="col-lg-6 col-sm-6 col bg-primary">
            <h2 className="text-center ">
              {props.feature.name ? props.feature.name : "Loading"}
            </h2>
            <p className="text-center">
              {props.feature.description
                ? props.feature.description
                : "Loading"}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="col-lg-6 col-sm-6 col bg-warning">
            <h2 className="text-center">
              {props.feature.name ? props.feature.name : "Loading"}
            </h2>
            <p className="text-center">
              {props.feature.description
                ? props.feature.description
                : "Loading"}
            </p>
          </div>
          <Img
            className="col-lg-6 col-sm-6 col bg-danger w-100 img-responsive"
            src={[props.feature.display_img ? props.feature.display_img : null]}
            alt={`key-feature-${props.feature.id + 3121}`}
            decode={false}
          />
        </>
      )}
    </div>
  );
};

export default FeatureSlide;
