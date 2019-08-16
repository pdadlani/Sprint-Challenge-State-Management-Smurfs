import React from 'react';

const Smurf = props => {
  return (
    <div className='smurf'>
      <h4>{props.smurf.name}</h4>
      <h3>Age: {props.smurf.age}</h3>
    </div>
  );
};

export default Smurf;