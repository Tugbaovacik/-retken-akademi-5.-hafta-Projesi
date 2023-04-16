import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      Kelvin: null,
      Fahrenheit: null,
    };
  }

  incrementValue = () => {
    this.setState((prevState) => {
      const newClicks = prevState.clicks + 1;
      const newK = (newClicks + 273.15).toFixed(2);
      const newF = (newClicks * 1.8 + 32).toFixed(2);
      return { clicks: newClicks, Kelvin: newK, Fahrenheit: newF };
    });
  };

  render() {
    const { clicks, Kelvin, Fahrenheit } = this.state;

    return (
      <div className="App">
        <h1 className="app_title">Hava Nasıl? </h1>
        <div className="weather-card" id="genel">
          <div className="sıcaklık"> Sıcaklık: {clicks} derece </div>
          <button className="btn btn-primary mt-2" onClick={this.incrementValue}>
            Sıcaklık Arttır
          </button>
          <div className="box">
            <h2>
              Celcius: {clicks} <span>°C </span>
            </h2>
            <h2>
              Fahrenheit: {Fahrenheit}
              <span> °F </span>
              </h2>
              <h2>
              Kelvin: {Kelvin} <span> K </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;