import React from 'react';
import './PrimaryPhoto.css'
import { PromiseProvider } from 'mongoose';

const PrimaryPhoto = (props) => {
  return (
    <div className="carousel-primary-photo">
      <img src={props.photo.url} />
    </div>
  )
}

export default PrimaryPhoto;  