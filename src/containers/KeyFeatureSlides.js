import React, { Component } from "react";
import FeatureSlide from "../components/FeatureSlide.js";

export default class KeyFeatureSlides extends Component {
  createSlides = () => {
    return this.props.game.key_features.map(feature => {
      return <FeatureSlide feature={feature} key={feature.id + 1612} />;
    });
  };

  render() {
    return (
      <div id="key-feature-slides" className="container-fluid pb-5 pt-5 px-4 mx-3">
        <div className="row">{this.createSlides()}</div>
      </div>
    );
  }
}
