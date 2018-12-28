import React from 'react';

const Arrow = (props) => {
  if (props.direction === 'left') {
    return (
      <span>&lt;</span>
    )
  } else {
    return (
      <span>&gt;</span>
    )
  }
}

export default Arrow;