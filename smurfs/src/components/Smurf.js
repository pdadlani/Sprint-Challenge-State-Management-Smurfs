import React, { useState } from 'react';
import { connect } from 'react-redux';

import { putData, getData, postData, deleteData } from '../actions';

const Smurf = props => {

  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState({
    name: props.smurf.name,
    age: props.smurf.age,
    height: props.smurf.height
  })

  const handleChange = event => {
    setEditInput({ ...editInput, [event.target.name]: event.target.value })
  }

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleUpdate = (event) => {
    event.preventDefault();
    props.putData(editInput, props.smurf.id)
    toggleEdit();
    props.postData(editInput);
    props.getData(props.smurfs);
  };

  const handleDelete = () => {
    console.log('handleDelete called');
    props.deleteData(props.smurf.id);
    props.getData(props.smurfs);
  }

  console.log('edit', isEditing);
  if(isEditing) {
    return (
      <div className='update-form'>
        {/* // display form */}
        <form onSubmit={handleUpdate}>
          <h2>Edit Smurf</h2>
          <input
            type='text'
            name='name'
            value={editInput.name}
            placeholder='enter name of smurf'
          onChange={handleChange}
          />
          <input
            type='text'
            name='age'
            value={editInput.age}
            placeholder='enter age of smurf'
          onChange={handleChange}
          />
          <input
            type='text'
            name='height'
            value={editInput.height}
            placeholder='enter height of smurf'
          onChange={handleChange}
          />
          <button type='submit'>Update Smurf</button>
        </form>
        <button onClick={toggleEdit}>Back</button>
      </div>
    )
  } 

  return (
    <div className='smurf'>
      <h4>{props.smurf.name}</h4>
      <h3>Age: {props.smurf.age}</h3>
      <button onClick={toggleEdit}>{isEditing ? 'Update Smurf' : 'Edit Smurf'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    putSmurfs: state.putSmurfs
  }
}

export default connect(mapStateToProps, { putData, getData, postData, deleteData })(Smurf);