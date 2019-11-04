import React, { Component } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import PageHeader from "./containers/PageHeader";
import PageFooter from "./components/PageFooter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
      game: {
        title: "",
        jumbotron_gif: "",
        main_trailer_url: "",
        logo: "",
        pitch: "",
        description: "",
        key_features: [],
        year_created: 2001,
        news_articles: [{ title: "", summary: "", body: "", splash_img: "" }],
        studio: {
          name: "",
          mission_statement: "",
          year_founded: 0,
          fb_link: "",
          twitter_link: "",
          instagram_link: "",
          twitch_link: "",
          youtube_link: ""
        }
      }
    };
  }

  componentDidMount() {
    if (this.state.game.title === "")
      fetch("http://localhost:3000/games/1")
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          this.setState({
            game: {
              ...this.state.game,
              title: json.title,
              jumbotron_gif: json.jumbotron_gif,
              main_trailer_url: json.main_trailer_url,
              logo: json.logo,
              pitch: json.pitch,
              description: json.description,
              key_features: json.key_features,
              year_created: json.year_created,
              studio: {
                ...this.state.game.studio,
                name: json.studio.name,
                mission_statement: json.studio.mission_statement,
                year_founded: json.studio.year_founded,
                fb_link: json.studio.fb_link,
                twitter_link: json.studio.twitter_link,
                instagram_link: json.studio.instagram_link,
                twitch_link: json.studio.twitch_link,
                youtube_link: json.studio.youtube_link
              },
              news_articles: json.news_articles
            }
          });
        });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <PageHeader game={this.state.game} />

          <Switch>
            <Route exact path="/">
              <LandingPage game={this.state.game} />
            </Route>
            <Route exact path="/news">
              <NewsPage game={this.state.game} />
            </Route>
            <Route exact path="order">
              <LandingPage game={this.state.game} />
            </Route>
          </Switch>
          <PageFooter game={this.state.game} />
        </Router>
      </div>
    );
  }
}

export default App;
