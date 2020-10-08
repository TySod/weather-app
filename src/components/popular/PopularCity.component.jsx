import React, {Component} from 'react';
import './popularcity.styles.scss';

export default class PopularCity extends Component {
  render() {
    // console.log(this.props.data)
    // let {name,weather:[main, description,icon]}=this.props;
    return (
      <div className="popular-city">
        <div className="pop-card">
          <div className="time-header">
    <p className="rise">Sunrise <span>{this.props.sunrise}</span></p>
    <p className="now">Time <span>{this.props.now}</span> </p>
    <p className="set">Sunset <span>{this.props.sunset}</span></p>
          </div>
            <div className="card-body">
            <div className="left-body"> 
            <p>cloud</p>
            <p>visibility</p>
            </div>
            <div className="main-body">
            <p className="weather">{this.props.weather}</p>
            <p className="icon">{this.props.desc}</p>
    <h2 className="city">{this.props.cityname} , {this.props.country}</h2>
            <img
              src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
              alt="weather icon"
            />
            </div>
            <div className="right-body">
            <p className="temp">{this.props.temp}&deg;C</p>
            </div>
          </div>
            <div className="footer">
            <div className="humid-footer">
              <p className="prop">wind</p>
              <p className="val">{this.props.wind} m/s</p>
            </div>
            <div className="humid-footer">
              <p className="prop">humidity</p>
              <p className="val">{this.props.humid} % </p>
            </div>
            <div className="humid-footer">
              <p className="prop">pressure</p>
              <p className="val">{this.props.pressure}</p>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
