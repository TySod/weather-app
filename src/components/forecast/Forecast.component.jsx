import React, {Component} from 'react'

import './Forecast.styles.scss'

import {API_KEY} from './data'


 class Forecast extends Component {
     constructor(props){
         super(props)
         this.state={
             isLoaded: false,
             data: {},
            //  city: data.name
         }
     }

     componentDidMount() {
         const base_url = `http://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=${API_KEY}`
        fetch(base_url)
        .then(response => response.json())
        // .then(data=> console.log(data))
        .then(result => {
            this.setState({isLoaded:true,
            data: result})
        })
        .catch(err => {
            console.log(err);       
         
        })
        
    }
        
    //  function getForecast(){
    //      fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seatle", {
    //          "method": "GET",
    //          "headers": {
    //              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //              "x-rapidapi-key": "7ae9308630msh4da52ac82436ddbp1b5957jsn62f7ad52d725"
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(response =>
    //             setResponseObj({responseObj:response})
    //         )
    //         .catch(err => {
    //             console.log(err);
    //         });
    render(){

        return(
            <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(this.state.data)}
           </div>
           <button>Get Forecast</button>
        </div>
    )
}
 }


// callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&
export default Forecast
