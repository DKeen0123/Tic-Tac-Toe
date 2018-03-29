import React from 'react';
import Box from './Box';

const Arena = props => {
  return (
    <div>
      <Box boxes={props.boxes} />
    </div>
  );
};

export default Arena;
