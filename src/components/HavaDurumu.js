import React from "react";

const HavaDurumu = (props) => {
  const { weather } = props;
  console.log(weather);

  if (!weather) {
    return (
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>Yükleniyor...</p>
    );
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <h2>{weather.weather.map((data) => data.description)}</h2>
      <h2>{Math.floor(weather.main.temp)} C</h2>
      <p style={{}}>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};
export default HavaDurumu;
