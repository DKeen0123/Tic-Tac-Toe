import React from 'react';

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
