import React, {Component} from "react";
import {Map, GoogleApiWrapper} from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
  marginRight: "200px"
};


class MapContainer extends Component {
    render (){
        return (
            <Map 
                google = {this.props.google}
                zoom = {10}
                style = {mapStyles}
                initialCenter = {{
                    lat :39.7392,
                    lng: -104.9903
                }}
                />
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: "AIzaSyDxcxkxf9HeL20MmdJ_bTuvcJ49l5aWC4g"
})(MapContainer);