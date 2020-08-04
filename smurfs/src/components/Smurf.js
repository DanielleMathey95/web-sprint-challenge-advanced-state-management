import React from 'react';

const Smurf = props => {
  const onDelete = event => {
    event.preventDefault();
    props.handleDelete(props.id)
  }

  return (
    <>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
      <button onClick={onDelete}>Delete</button>
    </>
  );
}

export default Smurf;