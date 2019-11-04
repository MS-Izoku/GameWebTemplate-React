import React, { Component } from "react";
import NewsCard from "../components/NewsCard";

export default class NewsCardContainer extends Component {
  createNewsCards = () => {
    function parseTime(time) {
      return new Date(time);
    }
    return this.props.game.news_articles
      .sort((a, b) => {
        if (parseTime(a) !== parseTime(b)) return parseTime(a) - parseTime(b);
        else return a.id - b.id;
      })
      .slice(0, 3)
      .map(article => {
        return <NewsCard article={article} />;
      });
  };
  render() {
    return (
      <div className="container-fluid mx-0">
        <div className="row">{this.createNewsCards()}</div>
      </div>
    );
  }
}
