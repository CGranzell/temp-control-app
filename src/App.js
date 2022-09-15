import React, { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("neutral");
  const [season, setSeason] = useState("background_autumn");

  const increseTemp = () => {
    if (temp === 30) return;

    const newTemp = temp + 1;
    if (newTemp >= 25) {
      setSeason("background_summer");
      setTempColor("hot");
    }
    if (newTemp < 25 && newTemp >= 15) {
      setSeason("background_spring");
      setTempColor("neutral");
    }
    if (newTemp < 15 && newTemp >= 7) {
      setSeason("background_autumn");
      setTempColor("neutral");
    }
    if (newTemp < 7) {
      setSeason("background_winter");
      setTempColor("cold");
    }
    setTemp(newTemp);
  };

  const decreaseTemp = () => {
    if (temp === -20) return;
    const newTemp = temp - 1;

    if (newTemp >= 25) {
      setSeason("background_summer");
      setTempColor("hot");
    }
    if (newTemp < 25 && newTemp >= 15) {
      setSeason("background_spring");
      setTempColor("neutral");
    }
    if (newTemp < 15 && newTemp >= 7) {
      setSeason("background_autumn");
      setTempColor("neutral");
    }

    if (newTemp < 7) {
      setSeason("background_winter");
      setTempColor("cold");
    }
    setTemp(newTemp);
  };

  return (
    <div className={`container ${season}`}>
      <div className="temp-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
        </div>
        <div className="button-container">
          <button onClick={increseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
