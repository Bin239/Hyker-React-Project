import React, {Component} from "react";
//import { runInThisContext } from "vm";

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
        
        trailsParsed.trails.forEach(trail => {
            console.log (trail.name)
        });
        console.log(trailsParsed.trails[3].name)

        this.setState({
            trails: trailsParsed.trails,
            
        })

    } catch (err){
        return err
    }
}


    render (){

        const trailList = this.state.trails.map((trail) => 
        <li key = {trail.id}><h4>{trail.name}</h4></li>
        )


        return (
            <div>
                <h2>Trails</h2>
                
               <ul>
                  <li>{trailList}</li> 
               </ul>
                 
            </div>
        )
    }
}

export default Trails;