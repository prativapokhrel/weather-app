import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a01fc4b26ad03eb293aac700477b6768";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.list[0].main.temp - 273,
        city: data.city.name,
        country: data.city.country, 
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        error: ""

      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined, 
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"

      })
    }
  }
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
                <div className="col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
};

export default App;

