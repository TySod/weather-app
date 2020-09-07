import React, { Component } from 'react';
import './custom-search.styles.scss'
import {API_KEY} from '../forecast/data';

class CustomSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            city:''
        }
        
    }
         handleChange = (e) => {
             let {name, value} = e.target
            this.setState({[name]: value})
            }

        handleSubmit = (e) => {
            e.preventDefault();
            // this.setState ({city: e.target.value})
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch()
        }
            
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='city' value={this.state.city} type="text"placeholder='type the city...' onChange={this.handleChange} />
                <button type= 'submit'>Get Current Weather</button>                
            </form>
        )
    }
}

export default CustomSearch
