import React from "react";
import { Container } from "react-bootstrap";
// import { API_BASE_URL, API_KEY } from "../Apis/config";
import  "../Css/TopCard.css"

const TopCard = ({dt, humidity, temp, wind, icon, city}) => {

  return (
    <Container>
      <div className="card mb-3" id="weatherCard" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={`http://openweathermap.org/img/wn/01d@2x.png`}
              id="topWeather"
              className="img-fluid rounded-sharp"
              height="200"
              alt="weatherImg"
            />
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">{city}</h5>
              <p className="card-text">
                {city} 
              </p>
              <p>{city}</p>
              <p>{temp}</p>
              <p>{humidity}</p>
              <p>{wind}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopCard;
