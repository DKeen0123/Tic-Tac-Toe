import React from 'react';

const Arena = props => {
  return (
    <div className="grid-container">
      {props.boxes.map(box => {
        return box;
      })}
    </div>
  );
};

export default Arena;
