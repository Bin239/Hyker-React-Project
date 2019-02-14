import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";


const mapStyles = {
    width: "50%",
    height: "65%",
    display: "block",
    marginLeft: "5%"
};

class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trails: [],
            //marker: marker,
            showingInfoWindow: false,
        }
    }

    componentDidMount() {

        this.getTrails();
    }

    clickSearch = () => {
        this.setState({
            
        })
    }

    getTrails = async () => {

        try {
            const response = await fetch("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200419192-64f137bb2aeb747750db18d5c696fee0");

            if (!response.ok) {
                throw Error(response.statusText);
            }


            const trailsParsed = await response.json();

            // for (let i = 0; i < trailsParsed.trails.length; i++) {
            //     var marker = new Marker({
            //         position: { lat: trailsParsed.trails[i][1], lng: trailsParsed.trails[i][2] },
            //         map: Map,
            //         icon: Image,
            //         title: trailsParsed[i][0],
            //     })
            // }

          
                this.setState({
                trails: trailsParsed.trails,
                
                })

                

            } catch (err) {
            return err
        }
    }


    render() {

        const trailList = this.state.trails.map((trail) =>
            <div key={trail.id} className = "traillist">
                <li ><h4>{trail.name} </h4></li>
                <button>Delete</button>
                <button>Edit</button>

            </div>)


        return (
            <div>
                <form>
                    <button style={{
                        fontSize: 24,
                        display: "block",
                        width: "90%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        marginLeft: "5%"
                    }}>Search For Trails Near You 
                     </button>
                </form>

                <Map className="map"
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={{
                        lat: 39.7392,
                        lng: -104.9903
                    }

                
                
            } 
            

                />

                <h2 >Trails</h2>

                <ul>
                    {trailList}

                </ul>


            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDxcxkxf9HeL20MmdJ_bTuvcJ49l5aWC4g"
})(MapContainer);





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