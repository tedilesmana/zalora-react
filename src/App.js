import React, { Component } from 'react';
import Navbar from './component/template/Navbar';
import Footer from './component/template/Footer';
import BgNavbar from './component/template/BgNavbar';
import VHome from './views/VHome';
import { Switch, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <BgNavbar />
        <Navbar />
        <Switch>
          <Route path="/" exact ><VHome /></Route>
          {/*<Route path="/favorite"><VFavorite /></Route>*/}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
