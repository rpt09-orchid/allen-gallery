import React from 'react';

const Arrow = (props) => {
  if (props.direction === 'left') {
    return (
      <span onClick={props.slideHandler} id="slideLeft">&lt;</span>
    )
  } else {
    return (
      <span onClick={props.slideHandler} id="slideRight">&gt;</span>
    )
  }
}

export default Arrow;