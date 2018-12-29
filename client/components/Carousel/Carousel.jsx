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
      activePhoto: 0,
      ready: false
    }
  }

  componentDidMount() {
    this.forceStateUpdate();
  }
  
  forceStateUpdate() {
    const that = this;
    setTimeout(function() {
      that.setState({
        photos: _.toArray(that.props.photos),
        activePhoto: 0,
      }, () => {
        that.setState({ready: true});
      })
    }, 200); 
  }

  slideHandler(e) {
    // Aliases for readability and economy =================
    const photos = this.state.photos;
    const activePhoto = this.state.activePhoto;
    // =====================================================

    if (e.target.id === 'slidePrevious') {
      if (activePhoto > 0) {
        this.setState({ activePhoto: activePhoto - 1 })
      }
    } else if (e.target.id === 'slideNext') {
      if (activePhoto < photos.length - 1) {
        this.setState({ activePhoto: activePhoto + 1 })
      }
    }
  }

  render() {
    if (this.state.ready) {
      return (
        <div id="carousel">
          <div id="carousel-exit-btn">
            <span onClick={this.props.toggleCarousel}>X</span>
          </div>
          <div id="carousel-main-container">
            <div className="carousel-arrow"><Arrow direction={'left'} slideHandler={this.slideHandler.bind(this)}/></div>
            <PrimaryPhoto photo={this.state.photos[this.state.activePhoto]}/>
            <div className="carousel-arrow"><Arrow direction={'right'} slideHandler={this.slideHandler.bind(this)}/></div>
          </div>
        </div>
      )
    } else {
      return (
        <div id="carousel">
        <div id="carousel-main-container">
          <div id="carousel-loader">
            <span>Loading...</span>
          </div>
          </div>
        </div>
      )
    }
  }
}

export default Carousel;