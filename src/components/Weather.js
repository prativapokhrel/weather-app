import React from "react";

const weather = (props) => (
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className="weather__key">Location: 
          &nbsp;<span className="weather__value">{props.city}, {props.country} </span>
        </p>
      )}
    {props.temperature && <p className="weather__key"> Temperature: 
      &nbsp;<span className="weather__value">{props.temperature.toFixed(1)}&deg;C</span> 
    </p>}
    {props.humidity && <p className="weather__key"> Humidity: 
      &nbsp;<span className="weather__value">{props.humidity}</span>
    </p>}
    {props.description && <p className="weather__key"> Conditions: 
      &nbsp;<span className="weather__value">{props.description}</span>
    </p>}
    {props.error && <p className="weather__key"> 
      <span className="weather__error">{props.error}</span> 
    </p>}
  </div>
);

export default weather;
