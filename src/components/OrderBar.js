import React from "react";
import { withRouter } from "react-router";
import Img from "react-image";

const OrderBar = props => {
  return (
    <div className="py-3 px-3">
      <div className="row">
        <div className="col" />
        <div className="col-lg-10">
          <a className="mx-5" href="https://store.steampowered.com/">
            <Img
              src={[require("../icons/iconfinder_steam_287646.svg")]}
              alt="steam-page"
              decode={false}
            />
          </a>
          <a
            className="mx-5"
            href="https://store.playstation.com/en-gb/home/games"
          >
            <Img
              src={[require("../icons/iconfinder_playstation_287672.svg")]}
              alt="playstation-page"
              decode={false}
            />
          </a>
          <a
            className="mx-5"
            href="https://www.microsoft.com/en-us/store/b/home"
          >
            <Img
              src={[require("../icons/iconfinder_038_025_xbox_game_network_android_material_1646935.svg")]}
              alt="mirosoft-store-page"
              decode={false}
            />
          </a>
        </div>
        <div className="col" />
      </div>
    </div>
  );
};

export default withRouter(OrderBar);
