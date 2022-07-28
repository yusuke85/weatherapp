import React, {Row, Col} from "react";
import TopCard from "../Component/TopCard"

const TopList = (climates) => {

  if(climates && climates.length){
  
    return (
      <Row>
        {climates.map(({dt, main, climate, city, wind, weather, name}) => (
          <Col key={dt}>
            <TopCard
              city={city.name}
              // temp={main.temp}
              humidity={main.humidity}
              wind={wind.speed}
              dt={dt * 1000}
              icon={weather[0].icon}
              />
          </Col>
        ))}
      </Row>
      
      );
    } 
}

export default TopList