import React from "react";

const Trails = (props) => {
console.log(props)
    const trailList = props.trails.map((trail) => {
        return (
            <li key={trail.id}>
            <span>{trail.name}</span><br/>
            <button onClick={props.deleteTrail.bind(null, trail.id)}>Delete</button>
            <button onClick={props.showModal.bind(null, trail)}>Edit</button>
          </li> 
        )
    });

    return (

        <div className = "traillist">
          <h4>Trails</h4>
          <ul >
            {trailList}
          </ul>
        </div>
        )
}

export default Trails;