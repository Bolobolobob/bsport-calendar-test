import React from 'react';
import moment from 'moment';

class Offer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const offer = this.props.value;
    
    const startingDate = moment(offer.date_start);
    const endingDate = moment(offer.date_start).add(offer.duration_minute, 'm');

    const effectif = offer.effectif;
    const activity = offer.activity;
    const establishment = offer.establishment;

    console.log(offer.duration_minute);

    return (
    <div className="offer">
      {startingDate.format("HH:mm")}-{endingDate.format("HH:mm")} effectif: {effectif}
    </div>
    );

  }
}

export default Offer;