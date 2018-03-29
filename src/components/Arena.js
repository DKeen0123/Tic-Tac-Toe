import React from 'react';
import Box from './Box';

const Arena = props => {
  return (
    <div>
      <Box handlePlayerMove={props.handlePlayerMove} boxes={props.boxes} />
    </div>
  );
};

export default Arena;
