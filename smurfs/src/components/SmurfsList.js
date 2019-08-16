import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

import Smurf from './Smurf.js';

const SmurfsList = props => {

  console.log('props in SmurfsList', props);

  useEffect(() => {
    console.log('useEffect is called');
    props.getData(props.smurfs)
  }, [])

  console.log('props in SmurfsList after useEffect', props)

  return (
    <div className='smurfs-list'>
      Smurfs List
      {props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs
  }
}

export default connect(mapStateToProps, { getData })(SmurfsList);