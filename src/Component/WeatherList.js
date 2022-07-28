import React from "react";
import { Col, Row } from "react-bootstrap";
import WeatherApiCard from "./WeatherApiCard";
import TopList from "./TopList";

const WeatherList = ({weathers}) => {


  if(weathers && weathers.length){

    return (
      <>
      <TopList />
      <Row>
        {weathers.map(({dt, main, weather}) => (
          <Col key={dt}>
            <WeatherApiCard
              temp_max={main.temp_max}
              temp_min={main.temp_min}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
            />
          </Col>
        ))}
      </Row>
      </>
      
    );
  } else {
    return (
    <p>Loading</p>
    )
  }
};

export default WeatherList
