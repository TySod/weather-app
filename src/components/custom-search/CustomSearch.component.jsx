import React, { Component } from 'react';
import './custom-search.styles.scss'

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
            this.setState ({city: e.target.value})
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
