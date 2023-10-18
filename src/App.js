import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [isImperial, setImperial] = useState(true);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = isImperial ? height * 0.0254 : height * 0.01;
      const weightInKg = isImperial ? weight * 0.453592 : weight;
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(
        1
      );
      setBMI(bmiValue);
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div id="page">
      <h1>BMI Calculator</h1>
      <div id="weight">
        <label>{isImperial ? "Weight (lbs): " : "Weight (kg): "}</label>
        <input
          placeholder="220"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
      </div>
      <div>
        <label>{isImperial ? "Height (inches): " : "Height (cm): "}</label>
        <input
          placeholder="70"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={() => setImperial(!isImperial)}>
          {isImperial ? "Switch to metric" : "Switch to Imperial"}
        </button>
      </div>
      <h2>{"Your BMI: " + bmi}</h2>
    </div>
  );
}

export default App;