import React from 'react';

const Photo = (props) => {
  return (
    <img src={props.data.url} className="photo" onClick={props.toggleCarousel}/>
  )
}

export default Photo;