import React, {Component} from 'react';

import  PopularCity  from "../popular/PopularCity.component";

import './Forecast.styles.scss';

import {API_KEY, CITY_IDS} from './data';
// import PopularCity from '../popular/PopularCity.component';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      cities: {},
      //  city: data.name
    };
  }

  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&units=metric&appid=${API_KEY}`;
    //  const base_url = `http://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=${API_KEY}`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const {list} = result;


        const cities = list.map((city) => {
            console.log(city);
          const {
            name,
            main: {temp, humidity, pressure},
            sys:{country, sunrise, sunset},
            weather:[{main, desciption, icon}], wind:{speed}, id
          } = city;
           let rise_time = new Date(sunrise*1000).toLocaleTimeString();
            let set_time = new Date(sunset*1000).toLocaleTimeString();
            let now = new Date().toLocaleTimeString();

          return {
            id, country,
            rise_time, 
            set_time,
            name,
            temp,
            humidity,
            pressure,
            mainweather: main,
            desciption,
            windSpeed:speed,
            icon,
            now
          };
        });

        this.setState({isLoaded: true, cities});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {cities, isLoaded} = this.state;


    if (!isLoaded) return <div>Loading...</div>;

    return (   
        
      cities.map((city) => ( 
          <PopularCity key={city.id}
          cityname={city.name}
          temp={city.temp}
          humid={city.humidity}
          pressure={city.pressure}
          weather={city.mainweather}
          wind={city.windSpeed}
          desc={city.desciption}
          icon={city.icon}
          country={city.country}
          sunrise={city.rise_time}
          sunset={city.set_time}
          now={city.now}
          />
      
        ))
        
    )
    
    // }
  }
}

// callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&
export default Forecast;
