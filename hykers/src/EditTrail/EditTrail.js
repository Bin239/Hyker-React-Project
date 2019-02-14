import React from "react";

const EditTrail =  (props) => {
    return (
        <div>
            <h4>Edit Trail</h4>
            <form onSubmit = {props.closeModalAndUpdate}>
                <label>
                    Edit Trail Name: <input type = "text" name= "name" onChange={props.handleEditForm} value = {props.trailToEdit.title}></input>
                </label>
                <label>
                    Edit Latitude: <input type = "text" name = "latitude" onChange = {props.handleEditForm} value= {props.trailToEdit.latitude}></input>
                </label>
                <label>
                    Edit Longitude : <input type ="text" name ="longitude" onChange = {props.handleEditForm} value = {props.trailToEdit.longitude}></input>
                </label>
                <input type = "submit"/>
            
            </form>
        </div>
    )
}

export default EditTrail;