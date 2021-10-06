import React from 'react';
import Header from './Header';
import Home from './component/Pages/Home.js';
import MusicList from './component/Pages/MusicList.js';
import AboutUs from './component/Pages/AboutUs.js';
import FavoirteList from './component/Pages/FavoirteList.js';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/MusicList' component={MusicList} />
            <Route path='/FavoirteList' component={FavoirteList} />
            <Route path='/AboutUs' component={AboutUs} />

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
