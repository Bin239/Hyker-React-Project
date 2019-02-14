import  React, {Component} from "react";

class AddTrail extends Component {

    constructor(){
        super();

        this.state = {
            name : "",
            Latitude: "",
            Longitude : ""
        }
    }

handleChange =(e) => {
    this.setState ({
        [e.target.name]: e.target.value
    })
}


    render (){
        return (


            <form onSubmit = {this.props.addTrail.bind(null, this.state)} >

                Trail Name : <input type = "text" name = "name" onChange = {this.handleChange}></input>
                Latitude: <input type = "text" name = "name" onChange = {this.handleChange}></input>
                Longitude : <input type = "text"></input>


            </form>
        )
    }

}


export default AddTrail;