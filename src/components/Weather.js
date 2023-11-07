import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherContainer, Temp } from "./WeatherStyles";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=8a017d78571ef6787b1ccd26b5606796";

const Weather = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) return null;
  const temp = data.main.temp;
  return (
    <WeatherContainer>
      <Temp>{temp.toFixed(0)}°C</Temp>
    </WeatherContainer>
  );
};

export default Weather;
