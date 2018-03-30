import React from 'react';
import Box from './Box';

const Arena = props => {
  return (
    <div>
      {props.boxes.map(box => {
        return box;
      })}
    </div>
  );
};

export default Arena;
