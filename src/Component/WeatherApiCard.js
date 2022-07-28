import React from "react";
import { Card } from "react-bootstrap";
import "../Css/WeatherApiCard.css"


const WeatherApiCard = ({temp_min, temp_max, icon}) => {
  

  return (
    <>
    <Card >  
      <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Card.Body>
        <p id="min">Min: {temp_min}</p>
        <p id="max">Max: {temp_max}</p>
      </Card.Body>
    </Card>
    </>
  );
};

export default WeatherApiCard;