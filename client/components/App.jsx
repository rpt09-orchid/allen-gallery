import React from 'react';
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx';
import Carousel from './Carousel/Carousel.jsx';
import Nav from './Nav/Nav.jsx';
import EditPhotoForm from './EditPhotoForm/EditPhotoForm.jsx';
import './App.css';

// const serviceLocation = 'http://ec2-13-57-205-149.us-west-1.compute.amazonaws.com:3002';
const serviceLocation = 'http://localhost:3002';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: {
        photo1: {
          url: ''
        },
        photo2: {
          url: ''
        },
        photo3: {
          url: ''
        },
        photo4: {
          url: ''
        },
        photo5: {
          url: ''
        },
      },
      carouselActive: false,
      isEditPhotoClicked: false,
    }
    this.handleEditFormClick = this.handleEditFormClick.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    let id = '/1';
    if (window.location.pathname !== '/') {
      id = window.location.pathname;
    }

    fetch(`${serviceLocation}/photos${id}`)
      .then((res) => {
        return res.json();
      })
      .then((property) => {
        const photos = property.data[0].photos;
        this.setState({
          photos: {
            photo1: {
              url: photos[0].location
            },
            photo2: {
              url: photos[1].location
            },
            photo3: {
              url: photos[2].location
            },
            photo4: {
              url: photos[3].location
            },
            photo5: {
              url: photos[4].location
            }
          },
          clicked: 1
        })
      })
  }

  handleEditFormClick() {
    this.setState(previousState => {
      return {isEditPhotoClicked: !previousState.isEditPhotoClicked}
    });
  }

  toggleCarousel(e) {
    const clickedId = parseInt(e.target.id.slice(5)) - 1;
    this.state.carouselActive ? this.setState({ carouselActive: false, clicked: 1 }) : this.setState({ carouselActive: true, clicked: clickedId });
  }

  render() {
    if (this.state.carouselActive) {
      return (
        <div>
          <div>
            <Nav />
          </div>
          <div>
            <Carousel photos={this.state.photos} clicked={this.state.clicked} toggleCarousel={this.toggleCarousel.bind(this)} />
          </div>
        </div>
      )
    } else {
      let gridOrForm;
      if (!this.state.isEditPhotoClicked) {
        gridOrForm = <PhotoGrid photos={ this.state.photos } toggleCarousel={ this.toggleCarousel.bind(this) } />
      } else {
        gridOrForm = <EditPhotoForm handleEditFormClick={ this.handleEditFormClick } getPhotos={ this.getPhotos }/>
      }
      return (
        <div>
          <div>
            <Nav handleEditFormClick={this.handleEditFormClick} />
          </div>
          <div>
            {gridOrForm}
          </div>
        </div>
      )
    }
  }
}

export default App;