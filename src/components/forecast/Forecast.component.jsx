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
      // .then(data=> console.log(data))
      .then((result) => {
        const {list} = result;

        console.log(list);

        const cities = list.map((city) => {
          //   console.log(city);
          const {
            name,
            main: {temp, humidity, pressure},
            weather:[{main, desciption}], wind:{speed}, id
          } = city;

          return {
            id,
            name,
            temp,
            humidity,
            pressure,
            mainweather: main,
            desciption,
            windSpeed:speed
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

    console.log(cities);

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
          />
      
        ))
    )
    
    // }
  }
}

// callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&
export default Forecast;
