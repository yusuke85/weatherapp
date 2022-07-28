import React from "react";
import CitySelector from "./Component/CitySelector";
import UseFetch from "./Hook/UseFetch";
import WeatherList from "./Component/WeatherList";
// import TopList from "./Component/TopList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { API_BASE_URL, API_KEY } from "./Apis/config";
import "./App.css";
// import TopCard from "./Component/TopCard";


const App = () => {
  const { data, setUrl } = UseFetch();
  console.log(data)
  return (
    <Router>

    <Container className="App">
      <CitySelector
        onSearch={(city) =>
          setUrl(
            `${API_BASE_URL}data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`
          )
        }
      />
      <Routes>
      <Route exact path="/" element={data && <WeatherList  weathers={data.list} />} />
      </Routes>
    </Container>
    </Router>
    
  );
};

export default App;
