import React from 'react';
import moment from 'moment';

import ListOffers from './ListOffers/ListOffers';
import Calendar from './Calendar/Calendar';

import './App.css';

/**
 * Main component of the app
 * Contains most of the stateful logic
 */
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      links: null,
      nextPage: null,
      startOfWeek: null,
      selectedDay: null,
    }
    
    this.handleWeekChange = this.handleWeekChange.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.getOffersPerDay = this.getOffersPerDay.bind(this);
    this.getDaysOfWeek = this.getDaysOfWeek.bind(this);

  }

  handleWeekChange(startOfWeek) {

    this.setState({
      startOfWeek: startOfWeek,
    });

    var companyId = 6;
    var formattedStartOfWeek = startOfWeek.format("Y-MM-DD");
    var formattedEndOfWeek = moment(startOfWeek).add(6, 'd').format("Y-MM-DD");

    fetch(`https://back.staging.bsport.io/api/v1/offer/?min_date=${formattedStartOfWeek}&max_date=${formattedEndOfWeek}&company=${companyId}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        offers: data.results,
        nextPage: data.nextPage,
        links: data.links
      });
    });

  }

  handleSelectDay(date) {
    this.setState({
      selectedDay: date,
    });
  }

  getOffersPerDay(offers) {

    var offersPerDay = [];
    var weekDays = this.getDaysOfWeek();

    if(weekDays.length > 0){
      for(let i=0; i<weekDays.length; i++) {
        offersPerDay.push({
          date: weekDays[i],
          offers: [],
        });
      }
  
      for(let i=0; i<offers.length; i++) {
        
        var offerDate = moment(offers[i].date_start);
        var dayOfWeek = offerDate.weekday();
  
        offersPerDay[dayOfWeek]['offers'].push(offers[i]);
      }
    }

    return offersPerDay;

  }

  getDaysOfWeek() {
    
    var weekDays = [];

    if (this.state.startOfWeek){
      var dayOfWeek = moment(this.state.startOfWeek);

      weekDays.push(moment(dayOfWeek));
      for(let i=0; i<6; i++){
        weekDays.push(moment(dayOfWeek.add(1, 'd')));
      }
    }

    return weekDays;
  }
  

  render() {

    const offers = this.state.offers;
    const startOfWeek = this.state.startOfWeek;
    const selectedDay = this.state.selectedDay;
    const offersPerDay = this.getOffersPerDay(offers);

    return (
    <div className="App">
      <Calendar onWeekChange={this.handleWeekChange} onSelectDayChange={this.handleSelectDay} offersPerDay={offersPerDay}/>
      <ListOffers offersPerDay={offersPerDay} startOfWeek={startOfWeek} selectedDay={selectedDay} />
    </div>
    );

  }
}

export default App;
