import React, {Component} from "react";

class UserInput extends Component {
        render (){
            return (
                <form>
                    Name: <input type = "text"></input>
                    Latitude : <input type = "text"></input>
                    Longitude : <input type = "text"></input>
                    <button type = "submit">Add New Trail</button>
                </form>
            )
        }

}


export default UserInput;

