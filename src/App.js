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
    this.setState({
      temperature: data.main
    })
  }
  render() {
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;