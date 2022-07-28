import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import "../Css/CitySelect.css"


const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');

  return (
    <>
      <Row id="top">
        <Col>
          <h1>City Name</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter City"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
