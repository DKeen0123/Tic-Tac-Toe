import React from 'react';

const Box = props => {
  return (
    <div>
      <button onClick={props.handlePlayerMove} />
    </div>
  );
};

export default Box;
