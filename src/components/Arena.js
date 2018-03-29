import React from 'react';
import Box from './Box';

const Arena = props => {
  return (
    <div>
      <Box onClick={props.handlePlayerMove} />
    </div>
  );
};

export default Arena;
