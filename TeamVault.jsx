
import { useState } from "react";

const correctOrder = ["red", "yellow", "blue", "black", "white", "green"];

const dropdownOptions = [
  ["black", "yellow", "green", "red", "blue", "white"],
  ["blue", "white", "yellow", "green", "red", "black"],
  ["green", "black", "red", "yellow", "white", "blue"],
  ["white", "green", "blue", "black", "yellow", "red"],
  ["yellow", "blue", "black", "red", "green", "white"],
  ["red", "blue", "yellow", "white", "black", "green"]
];

const TeamVault = ({ team }) => {
  const [selection, setSelection] = useState(Array(6).fill(""));
  const [status, setStatus] = useState(null);

  const checkCombination = () => {
    if (JSON.stringify(selection) === JSON.stringify(correctOrder)) {
      setStatus("success");
    } else {
      setStatus("fail");
    }
  };

  const updateSelection = (index, value) => {
    const newSelection = [...selection];
    newSelection[index] = value;
    setSelection(newSelection);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{team} – De Zes Sleutels</h1>
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{ margin: "10px 0" }}>
          <label>Sleutel {i + 1}:</label>
          <select onChange={(e) => updateSelection(i, e.target.value)} value={selection[i]}>
            <option value="">Selecteer kleur</option>
            {dropdownOptions[i].map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={checkCombination} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Check combinatie
      </button>
      {status === "success" && (
        <div style={{ color: "green", marginTop: "1rem" }}>
          ✅ Juiste combinatie.
          <br />
          Bonus cijferslot: <strong>0</strong>
        </div>
      )}
      {status === "fail" && (
        <div style={{ color: "red", marginTop: "1rem" }}>
          ❌ De kluis blijft dicht. Probeer het opnieuw.
        </div>
      )}
    </div>
  );
};

export default TeamVault;
