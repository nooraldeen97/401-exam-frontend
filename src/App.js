import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyFav from './components/MyFav';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/MyFav">
              <MyFav/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;