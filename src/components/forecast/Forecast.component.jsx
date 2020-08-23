import React, {Component} from 'react'

import  PopularCity  from "../popular/PopularCity.component";

import './Forecast.styles.scss'

import {API_KEY, RAPID_API_KEY} from './data'


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
        fetch
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
           <PopularCity
           name={this.setState.data.name}
           />
        </div>
    )
}
 }


// callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&
export default Forecast
