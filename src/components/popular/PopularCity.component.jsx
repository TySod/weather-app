import React, { Component } from 'react'
import './popularcity.styles.scss'

export default class PopularCity extends Component {
    render() {
        // console.log(this.props.data)
        // let {name,weather:[main, description,icon]}=this.props;
        return (
            <>
            <div className='pop-card day'>
                <div className="header"> 
                    <p className="weather">{this.props.weather}</p>
                    <p className="icon">{this.props.desc}</p>
                    <h2 className="city">{this.props.cityname}</h2>
                    <p className="temp">{this.props.temp}&deg;C</p>
                </div>
                <div className="card-body">
                <div className="humid-body">
                    <p className="prop">wind</p>
                    <i className="val">{this.props.wind}</i>
                </div>
                <div className="humid-body">
                    <p className="prop">humidity</p>
                    <i className="val">{this.props.humid}</i>
                </div>
                <div className="humid-body">
                    <p className="prop">pressure</p>
                    <i className="val">{this.props.pressure}</i>
                </div>
            
                </div>
            </div>
               
            </>
        )
    }
}
