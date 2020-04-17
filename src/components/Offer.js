import React from 'react';

class Offer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const offer = this.props.value;

    return (
    <div className="offer">
      {offer.id} 
    </div>
    );

  }
}

export default Offer;