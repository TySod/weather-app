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
                    <p className="weather">cloudy</p>
                    <h2 className="city">Lagos</h2>
                    <p className="temp">20&deg;C</p>
                </div>
                <div className="card-body">
                <div className="humid-body">
                    <p className="prop">wind</p>
                    <i className="val">75</i>
                </div>
                <div className="humid-body">
                    <p className="prop">humidity</p>
                    <i className="val">48</i>
                </div>
                <div className="humid-body">
                    <p className="prop">pressure</p>
                    <i className="val">408</i>
                </div>
            
                </div>
            </div>
               
            </>
        )
    }
}
