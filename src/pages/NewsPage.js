import React, { Component } from "react";
import NewsCard from "../components/NewsCard";

export default class NewsPage extends Component {
  constructor() {
    super();
    this.state = {
      articlesPerRow: 3,
      articlesObj: { row_1: [] }
    };
  }
  createsNewsCards = () => {
    function parseTime(time) {
      return new Date(time);
    }
    const dateSortedArticles = this.props.game.news_articles.sort((a, b) => {
      if (parseTime(a) !== parseTime(b)) return parseTime(a) - parseTime(b);
      else return a.id - b.id;
    });

    let yIndex = 0;
    let xIndex = 0;
    let newArticlesObj = {};
    for(let i = 0; i < dateSortedArticles.length; i++){
        let rowKey = `row_${yIndex}`
        console.log(rowKey)
        if(rowKey in newArticlesObj){
            console.log("Found")
        }
        else{
            ++yIndex;
            rowKey = `row_${yIndex}`
            xIndex = 0;
            newArticlesObj[rowKey] = dateSortedArticles[i]
            //console.log("Not Found")
        }
        //debugger
    }
    console.log(newArticlesObj , "OBJECT")
  };

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid">
        <div className="row">{this.createsNewsCards()}</div>
      </div>
    );
  }
}
