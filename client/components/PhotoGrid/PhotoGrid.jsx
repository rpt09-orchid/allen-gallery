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
        <div id="photo1" className="cropped-photo" style={backgroundImages.photo1} onClick={props.toggleCarousel}></div>
      </div>

      <div className="photo-cell photo-2">
        <div id="photo2" className="cropped-photo" style={backgroundImages.photo2} onClick={props.toggleCarousel}></div>
      </div>

      <div className="photo-cell photo-3">
        <div id="photo3" className="cropped-photo" style={backgroundImages.photo3} onClick={props.toggleCarousel}></div>
      </div>

      <div className="photo-cell photo-4">
        <div id="photo4" className="cropped-photo" style={backgroundImages.photo4} onClick={props.toggleCarousel}></div>
      </div>

      <div className="photo-cell photo-5">
        <div id="photo5" className="cropped-photo" style={backgroundImages.photo5} onClick={props.toggleCarousel}></div>
      </div>
    </div>
  )
}

export default PhotoGrid;

