import React from 'react';
import Arrow from './Arrow.jsx';
import PrimaryPhoto from './PrimaryPhoto.jsx';
import './Carousel.css';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div id="carousel">
        <div id="carousel-main-container">
          <div className="carousel-arrow-left"><Arrow direction={'left'}/></div>
          <PrimaryPhoto />
          <div className="carousel-arrow-right"><Arrow direction={'right'}/></div>
        </div>
      </div>
    )
  }
}

//onClick={this.props.toggleCarousel}

export default Carousel;