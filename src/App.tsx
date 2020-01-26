import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // @ts-ignore  // ignore types for react-router-dom
} from "react-router-dom";
import Page404 from "./routes/Page404";
import Home from "./routes/Home";
import Page1 from "./routes/Page1";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/index.html" to="/"/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/page1" component={Page1}/>
        <Route component={Page404}/>
      </Switch>
    </Router>
  );
}

export default App;
