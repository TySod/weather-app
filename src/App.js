import React from 'react';
import './App.css';
import Forecast from './components/forecast/Forecast.component' 
import PopularCity from './components/popular/PopularCity.component' 
import SearchedCity from './components/searched/SearchedCity.component' 
import CustomSearch from './components/custom-search/CustomSearch.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <CustomSearch/>
      <Forecast/>
      <SearchedCity/>
      <PopularCity/>
      </main>
      <footer>
        created by blackSuperDev
      </footer>
    </div>
  );
}

export default App;
