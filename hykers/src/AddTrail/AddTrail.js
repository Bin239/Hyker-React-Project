import React, { Component } from "react";

class AddTrail extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            Latitude: "",
            Longitude: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>
                <h3>Add New Trail to the List</h3>
                <form onSubmit={this.props.addTrail.bind(null, this.state)} >

                    Trail Name : <input type="text" name="name" onChange={this.handleChange}></input>
                    Latitude: <input type="text" name="name" onChange={this.handleChange}></input>
                    Longitude : <input type="text"></input>
                    <button type="submit">Submit</button>


                </form>
            </div>
        )
    }

}


export default AddTrail;