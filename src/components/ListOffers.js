import React from 'react';

import DailyOffers from './DailyOffers';

import '../App.css';


class ListOffers extends React.Component {

  render() {
    
    const offersPerDay = this.props.offersPerDay;
    const selectedDay = this.props.selectedDay;

    let listOffers;
    if (offersPerDay.length > 0) {
      listOffers = offersPerDay.map((dailyOffers) => {

        if (selectedDay) {
          if(dailyOffers.date.isSame(selectedDay, 'day')) {
            return(
              <DailyOffers key={dailyOffers.date} offers={dailyOffers.offers} day={dailyOffers.date} />
            )
          }
          else {
            return null;
          }
        } else {
          return(
            <DailyOffers key={dailyOffers.date} offers={dailyOffers.offers} day={dailyOffers.date} />
          )
        }
        
      });
    } else {
      listOffers = null;
    }


    return (
    <div className="listOffers">
      {listOffers}  
    </div>
    );

  }
}

export default ListOffers;