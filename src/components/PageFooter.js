import React, { Component } from "react";
import Img from "react-image";

import twitchIcon from "../icons/iconmonstr-twitch-3.svg";

// By Default, these will be from your STUDIOS INFORMATION
// if you want to link to a specific game's social media, use the links on the "game" section
class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer font-small bg-primary">
        <div className="container-fluid text-center text-md">
          <div className="row">
            <div className="col text-center">
              <p className="pb-3 pt-3 my-0 border-bottom border-info">
                Follow us on Social Media
              </p>
            </div>
          </div>
          <div className="row pb-3 pt-2">
            <div className="col text-center">
              <a
                href={this.props.game.studio.fb_link}
                className="text-center mx-3"
              >
                <Img
                  src={[require("../icons/iconmonstr-facebook-3.svg"), require("../icons/default-icon.svg")]}
                  alt="facebook-link"
                />
              </a>
              <a
                href={this.props.game.studio.twitter_link}
                className="text-center mx-3"
              >
                <Img
                  src={[require("../icons/iconmonstr-twitter-3.svg") , require("../icons/default-icon.svg")]}
                  alt="twitter-link"
                />
              </a>
              <a
                href={this.props.game.studio.instagram_link}
                className="text-center mx-3"
              >
                <Img
                  src={[require("../icons/iconmonstr-instagram-13.svg") , require("../icons/default-icon.svg")]}
                  alt="instagram-link"
                />
              </a>
              <a
                href={this.props.game.studio.youtube_link}
                className="text-center mx-3"
              >
                <Img
                  src={[require("../icons/iconmonstr-youtube-8.svg") , require("../icons/default-icon.svg")]}
                  alt="youtube-link"
                />
              </a>
              <a
                href={this.props.game.studio.twitch_link}
                className="text-center mx-3"
              >
                <Img
                  src={[require("../icons/iconmonstr-twitch-3.svg") , require("../icons/default-icon.svg")]}
                  alt="facebook-link"
                />
              </a>

              <a
                href={this.props.game.studio.twitch_link}
                className="text-center mx-3"
              >
                <img src={twitchIcon} alt="twitter-link" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 bg-info">
          © {this.props.game.year_created} Copyright:{" "}
          <a href="#" className="text-dark">
            {this.props.game.studio.name}
          </a>
        </div>
      </footer>
    );
  }
}

export default PageFooter;
