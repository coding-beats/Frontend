import React from 'react';
import Header from './Header';
import Home from './component/Pages/Home';
import Music from './component/Pages/Music';
import AboutUs from './component/Pages/AboutUs';
import FavoirteList from './component/Pages/FavoirteList';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';



class App extends React.Component {

  render() {
    return(
      <>
        <Router>
            <Header />
            <Switch>
               <Route path='/' exact component={Home} />
              <Route path='/Music' component={Music}/>
              <Route path='/FavoirteList' component={FavoirteList}/>
              <Route path='/AboutUs' component={AboutUs}/>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
