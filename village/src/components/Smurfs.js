import React from 'react';
import Smurf from './Smurf';
import './Smurf.css'

const Smurfs = (props) => {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  return (
    <div className="Smurfs">
      <h1 className="text__color-smurf" >Smurf Village</h1>
      <ul className="smurfList">
        { props.smurfList.map((smurf) => {
          return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} onDelete={props.onDelete} onUpdate={props.onUpdate} id={smurf.id} />;
        })}
      </ul>
    </div>
  );
}

export default Smurfs;