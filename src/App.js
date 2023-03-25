import React, {usestate} from "react";
import axios from "axios";

function App() {

  // const url= `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=39333f62ed1497e5a4ff008f28e99cb3`



  return (
  <div className="app">
    <div className="container">
      <div className="top">
        <div className="location">
          <p>Delhi</p>
        </div>
        <div className="temperature">
          <h1>25°C</h1>
        </div>
        <div className="description">
          <p>Cloudy</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="bold">25°C</p>
          <p>Feels like</p>
        </div>
        <div className="humidity">
          <p className="bold">20%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">12 MPH</p>
          <p>Winds</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
