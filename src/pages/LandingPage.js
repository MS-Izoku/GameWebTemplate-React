import React, { Component } from "react";
import { withRouter } from "react-router";

import LandingPageJumbotron from "../components/LandingPageJumbotron";
import KeyFeatureSlides from "../containers/KeyFeatureSlides";
import NewsCardContainer from "../containers/NewsCardContainer";
import PageDivider from '../components/PageDivider'
import OrderCard from '../components/OrderBar'
import OrderBar from "../components/OrderBar";

class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid mx-0 px-0" id="landing-component">
        <div className="row" id="jumbotron">
          <div className="col">
            <LandingPageJumbotron game={this.props.game} />
          </div>
        </div>

        <div className="row" id="key-feature-area">
          <KeyFeatureSlides game={this.props.game} />
        </div>
        <PageDivider />
        <div className="row px-2" id="news">
          <div className="col">
            <h2 className="text-center">Recent News</h2>
            <NewsCardContainer game={this.props.game} />
            <p
              className="text-right pr-2 mt-2"
              onClick={() => {
                this.props.history.push("/news");
              }}
            >
              All News >>
            </p>
          </div>
        </div>
        <PageDivider />
        <div className="row">
          <div className="col bg-warning">
              <OrderBar />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LandingPage);
