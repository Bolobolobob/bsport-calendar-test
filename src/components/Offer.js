import React from 'react';
import moment from 'moment';

import '../App.css';

/**
 * Displays a single offer
 */
class Offer extends React.Component {

  render() {

    const offer = this.props.value;
    
    const startingDate = moment(offer.date_start);
    const endingDate = moment(offer.date_start).add(offer.duration_minute, 'm');

    const effectif = offer.effectif;
    const activity = offer.activity;
    const establishment = offer.establishment;

    return (
    <div className="offer">
      {startingDate.format("HH:mm")}-{endingDate.format("HH:mm")} Number of people: {effectif} Activity: {activity} Location: {establishment}
    </div>
    );

  }
}

export default Offer;