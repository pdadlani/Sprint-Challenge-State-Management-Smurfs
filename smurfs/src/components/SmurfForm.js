import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postData, getData } from '../actions';

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: null,
    height: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.postData(newSmurf);
    props.getData(props.smurfs);
    setNewSmurf({
      name: '',
      age: 0,
      height: ''
    })
  }

  const handleChange = event => {
    setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
  }

  return (
    <div className='smurf-form'>
      <form onSubmit={handleSubmit}>
        <h2>Add a Smurf</h2>
        <input 
          type='text'
          name='name'
          value={newSmurf.name}
          placeholder='enter name of smurf'
          onChange={handleChange}
        />
        <input
          type='text'
          name='age'
          value={newSmurf.age}
          placeholder='enter age of smurf'
          onChange={handleChange}
        />
        <input
          type='text'
          name='height'
          value={newSmurf.height}
          placeholder='enter height of smurf'
          onChange={handleChange}
        />
        <button type='submit'>Add Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    postSmurfs: state.postSmurfs
  }
}

export default connect(mapStateToProps, { postData, getData })(SmurfForm);