import React, { Component } from 'react';
import './custom-search.styles.scss'
import {API_KEY} from '../forecast/data';
// import { info } from 'node-sass';

class CustomSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            city:'',
            unit:''
        }
        
    }
         handleChange = (e) => {
             let {name, value, checked, type} = e.target
             if(type === 'radio'){
                 this.setState(
                {[name]: value})
                console.log(checked)

             }
             else {
            this.setState({[name]: value})
            }}

        handleSubmit = (e) => {
            e.preventDefault();
            // this.setState ({city: e.target.value})
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=${this.state.unit}&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
            
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='city' value={this.state.city} type="text" placeholder='type the city...' onChange={this.handleChange} />
                <label htmlFor='met'> <input name='unit' type="radio" value="metric" checked={this.state.unit === "metric"} id='met' onChange={this.handleChange}/>  Celcius</label>             
                <label htmlFor='imp'> <input name='unit' type="radio" value='imperial' checked={this.state.unit === "imperial"} id='imp' onChange={this.handleChange}/>  Fahrenheit</label>             
                <button type= 'submit'>Get Current Weather</button> 
            </form>
        )
    }
}

export default CustomSearch
