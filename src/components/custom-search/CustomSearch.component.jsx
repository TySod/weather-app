import React, { Component } from 'react'

export class CustomSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            city:''
        }
        
    }
         handleChange=(e)=>{
            this.setState({value: e.target.value})
            }

        handleSubmit=(e)=>{
            this.setState({city: e.target.value})
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
