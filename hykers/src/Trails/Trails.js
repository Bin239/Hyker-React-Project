import React, {Component} from "react";

class Trails extends Component {
        constructor(){
            super();
            
            this.state = {
                trails: []
            }

        }

componentDidMount(){
        this.getTrails();
    }

getTrails = async () => {

    try {
        const response = await fetch ("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200419192-64f137bb2aeb747750db18d5c696fee0");
            
        if(!response.ok){
            throw Error(response.statusText);
        }

        const trailsParsed = await response.json();
        
        

        this.setState({
            trails: trailsParsed.data,

        })
        
        console.log(this.trails[1].name);
    } catch (err){
        return err
    }
}



    render (){
        return (
            <div>
                Trails
            </div>
        )
    }
}

export default Trails;