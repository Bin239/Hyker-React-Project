import  React, {Component} from "react";

class AddTrail extends Component {
    render (){
        return (
            <form>
                
                Trail Name : <input type = "text"></input>
                Latitude: <input type = "text"></input>
                Longitude : <input type = "text"></input>


            </form>
        )
    }

}


export default AddTrail;