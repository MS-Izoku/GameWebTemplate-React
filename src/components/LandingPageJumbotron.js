import React from "react";
//import ReactPlayer from "react-player";

const LandingPageJumbotron = props => {
  return (
    <div
      className={"jumbotron jumbotron-fluid mb-0"}
      style={{
        backgroundImage: `url(${props.game.jumbotron_gif})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="container min-vh-250">
        <h1 className="display-4">{props.game.pitch}</h1>
        <p className="lead">{props.game.description}</p>
      </div>
    </div>
  );
};

export default LandingPageJumbotron;
