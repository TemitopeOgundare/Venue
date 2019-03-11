import React, { Component } from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';
import MediaQuery from './components/MediaQuery';
import Header from './components/Header_footer/Header';
import Featured from './components/Featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Header_footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px",background:"cornflowerblue"}}>
      
      <Header/>
       <Element name="Featured">
            <Featured/>
       </Element>
      
        <Element name="VenueNfo">
          <VenueNfo/>

        </Element>

      <Element name="Highlights">
        <Highlight/>
      </Element>
      <Element name="Pricing">
        <Pricing/>
      </Element>
      <Element name="Location">

        <Location/>
      </Element>
       
       <Footer/>
      
      

      </div>
    );
  }
}

export default App;
