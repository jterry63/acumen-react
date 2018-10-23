import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey';
import Test from './Pages/Test/Test';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/test" component={Test} />
        
      
      </Switch>
    </div>
  </Router>
);

export default App;
