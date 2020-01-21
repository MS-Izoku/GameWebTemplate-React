import React, { Component } from "react";
import FeatureSlide from "../components/FeatureSlide.js";

export default class KeyFeatureSlides extends Component {
  createSlides = () => {
    let inverted = false;
    return this.props.game.key_features.map(feature => {
      inverted = !inverted
      return <FeatureSlide feature={feature} inversePositions={inverted} key={feature.id + 1612} />;
    });
  };

  render() {
    return (
      <div id="key-feature-slides" className="container-fluid pb-5 pt-5">
        {this.createSlides()}
      </div>
    );
  }
}
