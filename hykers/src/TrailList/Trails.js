import React from "react";

const Trails = (props) => {

    const trailList = props.trails.map((trail) => {
        return (
            <li key={trail._id}>
            <span>{trail.name}</span><br/>
            <button onClick={props.deleteTrail.bind(null, trail._id)}>Delete</button>
            <button onClick={props.showModal.bind(null, trail)}>Edit</button>
          </li> 
        )
    });

    return (

        <div>
          <h4>Trails</h4>
          <ul>
            {trailList}
          </ul>
        </div>
        )
}

export default Trails;