import React, { Component } from 'react'
import './popularcity.styles.scss'

export default class PopularCity extends Component {
    render() {
        let {name,weather:[main, description,icon]}=this.props.data
        return (
            <div className='pop-card'>
            <h2 className="city">{name}</h2>
        <p className="weather">{main}</p>
        <i className="icon">{icon}</i>
        <p className="desc">{description}</p>
                
            </div>
        )
    }
}
