import React from 'react';
import Arrow from './Arrow.jsx';
import PrimaryPhoto from './PrimaryPhoto.jsx';
import _ from 'lodash';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
      primaryPhoto: {url: null}
    }
  }

  componentDidMount() {
    this.forceStateUpdate();
  }
  
  // This is ghetto. Need to come back and refactor...
  forceStateUpdate() {
    const that = this;
    setTimeout(function() {
      that.setState({
        photos: _.toArray(that.props.photos),
        primaryPhoto: that.props.photos.photo1
      })
    }, 200); 
  }

  slideHandler(e) {
    if(e.target.id === 'slideLeft') {
      console.log('Left!')
    } else if(e.target.id === 'slideRight') {
      console.log('Right!')
    }
  }

  render() {
    window.photos = this.state.photos;
    window.photosArr = [this.state.photos.photo1]
    return (
      <div id="carousel">
        <div id="carousel-main-container">
          <div className="carousel-arrow-left"><Arrow direction={'left'} slideHandler={this.slideHandler.bind(this)}/></div>
          <PrimaryPhoto photo={this.state.primaryPhoto}/>
          <div className="carousel-arrow-right"><Arrow direction={'right'} slideHandler={this.slideHandler.bind(this)}/></div>
        </div>
      </div>
    )
  }
}

//onClick={this.props.toggleCarousel}

export default Carousel;