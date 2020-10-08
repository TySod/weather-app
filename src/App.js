import React from 'react';
import './App.css';
import Forecast from './components/forecast/Forecast.component' 
import SearchedCity from './components/searched/SearchedCity.component' 
import CustomSearch from './components/custom-search/CustomSearch.component';
import Sidebar from "./components/sidebar/Sidebar.component"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <Sidebar/>
      <main className='main'>
      <CustomSearch/>
      <SearchedCity/>
      <Forecast className="popular"/>
      </main>
      <footer>
        created by blackSuperDev
      </footer>
    </div>
  );
}

export default App;
