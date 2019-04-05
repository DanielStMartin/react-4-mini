import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import TopicList from "./Components/TopicList/TopicList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/post/:id" component={Post} />
          <Route path="/topics" component={TopicList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
