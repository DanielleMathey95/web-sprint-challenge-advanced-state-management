import React, {useState} from 'react';
import {addSmurf} from '../actions/actions';
import {connect} from 'react-redux';

const SmurfsForm = props => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')

  const handleChangesName = event => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleChangesAge = event => {
    event.preventDefault();
    setAge(event.target.value);
  }

  const handleChangesHeight = event => {
    event.preventDefault();
    setHeight(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(name, age, height);
    setName('')
    setAge('')
    setHeight('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <form>
          Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChangesName}
        />
        </form>

        <form>
          Age
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          onChange={handleChangesAge}
        />
        </form>
        <form>
          Height
        <input 
          type="text"
          name="height"
          placeholder="Height"
          value={height}
          onChange={handleChangesHeight}
        /> 
        </form>
        <button>Add New Smurf</button>
        </form>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, {addSmurf})(SmurfsForm);