import React from 'react';
import moment from 'moment';

import ListOffers from './components/ListOffers';

import data from './components/data.json'

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    /*
    this.state = {
      offers: [],
      links: {},
      nextPage: null,
    };
    */
    this.state = {
      offers: data.results,
      links: data.links,
      nextPage: data.nextPage,
    }
  }

  /*
  componentDidMount() {


    var startOfWeek = moment().weekday(0).format("Y-MM-DD");
    var endOfWeek = moment().weekday(6).format("Y-MM-DD");
    var companyId = 6;
    var pageNumber = 1;
    var pageSize = 10;

    fetch(`https://back.staging.bsport.io/api/v1/offer/?min_date=${startOfWeek}&max_date=${endOfWeek}&company=${companyId}&page=${pageNumber}&page_size=${pageSize}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          offers: data.results,
          nextPage: data.nextPage,
          links: data.links
        })
      });
     
  }
  */

  render() {

    const offers = this.state.offers;

    return (
    <div className="App">
      <ListOffers offers={offers}/> 
    </div>
    );

  }
}

export default App;
