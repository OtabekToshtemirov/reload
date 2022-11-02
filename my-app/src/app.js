import React from "react";
// import { BrowserRouter, Route ,Switch} from "react-router-dom";     
import { Route, Switch } from "react-router";
import About from "./About";
import Blog from "./blog";
import Nav from "./Nav";
import "./style.css";
import App from "./About";

function MyApp() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Nav/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  );
};

export default MyApp;
