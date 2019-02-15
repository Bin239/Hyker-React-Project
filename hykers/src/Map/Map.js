import React, { Component } from "react";
import AddTrail from "../AddTrail/AddTrail"
import TrailList from "../TrailList/Trails"
import { Map, GoogleApiWrapper } from "google-maps-react";
import EditTrail from "../EditTrail/EditTrail";


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
            trails : [],
            showModal : false,
            trailToEdit : {
                name : "",
                latitude : "",
                longitude: "",
                _id: null,
        
        }
    }
}

    componentDidMount() {
        this.getTrails();
    }

    showModal = (trail, e) => {
        this.setState({
          showModal: true,
          trailToEdit: trail
        })
      }

    closeModelAndUpdate = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch ("http://localhost:9000/api/v1/trails/" + this.state.trailToEdit._id, {
                method : "PUT",
                credentials: "include",
                body: JSON.stringify(this.state.trailToEdit),
                header: {
                    "Content-Type": "application/json"
                }
            });
            if(!response.ok){
                throw Error(response.statusText);
            }

            const parsedResponse = await response.json();

            const editTrailArray = this.state.trails.map((trail) => {
                if(trail._id === this.state.trailToEdit._id){
                    trail = parsedResponse.data
                }
                return trail
            });
            this.setState({
                showModal: false,
                trails: editTrailArray
            })
        }catch(err){
            console.log(err)
        }
    }

    handleEditFormInput = (e) => {
        this.setState({
            trailToEdit: {
                ...this.state.trailToEdit,
                [e.target.name]: e.target.value
            }
        })
    }

    getTrails = async () => {

        try {
            const response = await fetch("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200419192-64f137bb2aeb747750db18d5c696fee0");

            if (!response.ok) {
                throw Error(response.statusText);
            }


            const trailsParsed = await response.json();
                this.setState({
                trails: trailsParsed.trails,
                
                })
            } catch (err) {
            return err
        }
    }


    addTrail = async (trailToBeAdded, e) => {
        e.preventDefault ();
      
        try {
          const response = await fetch ("http://localhost:9000/api/v1/trails", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(trailToBeAdded),
            headers: {
              "Content-Type" : "application/json"
            }
          });
          if(!response.ok){
            throw Error (response.statusText);
          }
      
          const parsedAddTrail = await response.json();
      
          this.setState(
            {trails : [...this.state.trails, parsedAddTrail.data]})
        }
        catch (err) {
          console.log(err)
        }
      
      }

    deleteTrail = async (id, e) =>{
        e.preventDefault();

        try{
            const deleteTrail = await fetch ("http://localhost:9000/api/v1/trails" + id, {
                method: "DELETE",
                credentials: "include"
            });

            const parsedResponse = await deleteTrail.json()

            this.setState({
                trails: this.state.trails.filter((trail) => trail._id !== id)
            })
            console.log(parsedResponse)
        } catch (err){
            console.log(err)
        }
    }
      

    // clickSearch = () => {
    //     this.setState({
            
    //     })
    // }

    render() {

        const trailList = this.state.trails.map((trail) =>
            <div key={trail.id} className = "traillist">
                <h4>{trail.name} </h4>
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
                

              
                    
                
                
                <AddTrail addTrail = {this.addTrail}/>
                <TrailList trails = {this.state.trails} deleteTrail={this.deleteTrail} showModal = {this.showModal}/>
                {this.state.showModal ? <EditTrail handleEditFormInput = {this.handleEditFormInput} trailToEdit={this.state.trailToEdit} closeModelAndUpdate={this.closeModelAndUpdate}/> : null }
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

    // for (let i = 0; i < trailsParsed.trails.length; i++) {
            //     var marker = new Marker({
            //         position: { lat: trailsParsed.trails[i][1], lng: trailsParsed.trails[i][2] },
            //         map: Map,
            //         icon: Image,
            //         title: trailsParsed[i][0],
            //     })
            // }