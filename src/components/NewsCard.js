import React from "react";
import Img from "react-image";

const NewsCard = props => {
  return (
    <div className="col card px-0 border-0 mx-2">
      <Img
        src={[props.article.splash_image , "https://external-preview.redd.it/yFHo2bX1WluxmNTeb8Ofn-C3xDu400Na9GP8yeK-yJQ.jpg?auto=webp&s=b57e936dce77aacfeddd57f395a9b8572993d1cf"]}
        className="card-img-top"
        alt="card"
        decode={true}
      />
      <div className="card-body">
        <h5 className="card-title">{props.article.title}</h5>
        <p className="card-text">{props.article.body}</p>
      </div>
    </div>
  );
};

export default NewsCard;
