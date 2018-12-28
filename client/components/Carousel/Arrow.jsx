import React from 'react';

const Arrow = (props) => {
  if (props.direction === 'left') {
    return (
      <span onClick={props.slideHandler} id="slidePrevious">&lt;</span>
    )
  } else {
    return (
      <span onClick={props.slideHandler} id="slideNext">&gt;</span>
    )
  }
}

export default Arrow;