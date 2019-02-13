import React, {Component} from "react";

class Search extends Component {


    
        render (){
            return (
                <div className ="searchfield">
                <form>
                    <input style = {{
        fontSize : 24,
        display: "block",
        width: "95%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} placeholder = "Search For Trails">
      </input>
                </form>
                </div>
            )
        }

}


export default Search;

