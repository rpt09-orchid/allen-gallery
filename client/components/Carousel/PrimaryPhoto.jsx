import React from 'react';
import './PrimaryPhoto.css'
import { PromiseProvider } from 'mongoose';

const PrimaryPhoto = (props) => {
console.log(props.photo)
  return (
    <div className="carousel-primary-photo">
      <img src={props.photo.url} />
    </div>
  )
}

export default PrimaryPhoto;  