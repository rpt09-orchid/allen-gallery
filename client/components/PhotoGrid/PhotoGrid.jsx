import React from 'react';
import Photo from './Photo.jsx';
import './PhotoGrid.css';

const PhotoGrid = (props) => {
const backgroundImages = {
    photo1: {
      backgroundImage: 'url(' + props.photos.photo1.url + ')'
    },
    photo2: {
      backgroundImage: 'url(' + props.photos.photo2.url + ')'
    },
    photo3: {
      backgroundImage: 'url(' + props.photos.photo3.url + ')'
    },
    photo4: {
      backgroundImage: 'url(' + props.photos.photo4.url + ')'
    },
    photo5: {
      backgroundImage: 'url(' + props.photos.photo5.url + ')'
    }
  }

  return (
    <div className="grid-container">
    <div className="photo-cell photo-1">
      <div className="cropped-photo" id="photo-1" style={backgroundImages.photo1} onClick={props.toggleCarousel}></div>
    </div>

    <div className="photo-cell photo-2">
      <div className="cropped-photo" id="photo-2" style={backgroundImages.photo2} onClick={props.toggleCarousel}></div>
    </div>

    <div className="photo-cell photo-3">
      <div className="cropped-photo" id="photo-3" style={backgroundImages.photo3} onClick={props.toggleCarousel}></div>
    </div>

    <div className="photo-cell photo-4">
      <div className="cropped-photo" id="photo-4" style={backgroundImages.photo4} onClick={props.toggleCarousel}></div>
    </div>
    
    <div className="photo-cell photo-5">
      <div className="cropped-photo" id="photo-5" style={backgroundImages.photo5} onClick={props.toggleCarousel}></div>
    </div>


    </div>
  )
}

export default PhotoGrid;

