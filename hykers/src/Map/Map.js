import React, {Component} from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react";




const mapStyles = {
  width: "60%",
  height: "75%",
};

const trails = [
    ["Washing Park", 39.7008,-104.9712 ,1 ],
    ["Cherry Creek Bike Path",39.7156 ,-104.96630 ,2 ],
    ["Cherry Creek Park", 39.6222, -104.8402, 3],
    ["Bear Creek Lake", 39.650302,-105.137616,4 ],
    ["Green Mountain Trail", 39.687021,-105.155095, 5 ],
    ["Lookout Mountain Trail",39.731522,-105.239132 ,6 ],
    ["Buff Lake Nature center", 39.759862,-104.860371,7 ],
    ["Denver Central Park", 39.761333,-104.884047,8 ],    
    ["Willow Springs Open Space", 39.585046,-104.915578,9 ],
    ["Sloan Lake Park", 39.750382,-105.048021 , 10],
    ["Rocky mountain arsenal wildlife refuge",39.832850,-104.843900 , 11],
    ["Centennial Gardens", 39.754218,-104.890419,12 ],
    ["Denver Botanical Gardens",39.733369,-104.959459, 13 ],
    ["Sanderson gulch trail", 39.692110,-105.005023,14 ],
    ["Red Rocks Park",39.664135,-105.204540, 15],
    ["Garden of the gods park", 38.864422,-104.892021,16 ]
]

console.log(trails[1][1], trails[1][2])
for(let i = 0; i < trails.length; i++){
    var marker = new Marker({
        position : {lat: trails[i][1], lng: trails[i][2]},
        map: Map,
        icon: Image,
        title: trails[i][0],
    })
}



class MapContainer extends Component {

    constructor(props){
            super(props);
            this.state ={
                marker: marker,
                showingInfoWindow : false,
            }
        }

        // componentDidMount(){
        //     this.setState({
        //         marker: marker
        //     })
        // }
    
    
//    onMarkerClick = (props, marker, e) =>{
//        this.setState({
//            selectedPlace: props,
//            activeMarker: marker,
//            showingInfoWindow: true
//        })
//    }

//    onClose = props => {
//        if(this.state.showingInfoWindow){
//            this.setState({
//                showingInfoWindow: false,
//                activeMarker: null
//            })
//        }
//    }


    render (){
        return (
            
            <Map className = "map"
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