import React from 'react';
import moment from 'moment';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      links: {},
      nextPage: null,
    };
  }

  componentDidMount() {


    var startOfWeek = moment().day(1).format("Y-MM-DD");
    var endOfWeek = moment().day(7).format("Y-MM-DD");
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

  render() {

    return (
    <div className="App">
      Test  
    </div>
    );

  }
}

export default App;
