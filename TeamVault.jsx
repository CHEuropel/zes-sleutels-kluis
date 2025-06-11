import { useState } from "react";

const correctOrder = ["red", "yellow", "blue", "black", "white", "green"];

const TeamVault = ({ team }) => {
  const [selection, setSelection] = useState(Array(6).fill(""));
  const [status, setStatus] = useState(null);

  // Unieke dropdown volgordes per positie
  const dropdownOptions = [
    ["black", "yellow", "green", "red", "blue", "white"],
    ["blue", "white", "yellow", "green", "red", "black"],
    ["green", "black", "red", "yellow", "white", "blue"],
    ["white", "green", "blue", "black", "yellow", "red"],
    ["yellow", "blue", "black", "red", "green", "white"],
    ["red", "blue", "yellow", "white", "black", "green"]
  ];

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
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{team} – De Zes Sleutels</h1>
      {[...Array(6)].map((_, i) => (
        <div key={i}>
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
      <button onClick={checkCombination}>Check combinatie</button>
      {status === "success" && (
        <div style={{ color: 'green', marginTop: '20px' }}>
          ✅ Juiste combinatie.
          <br />
          Bonus cijferslot: <strong>0</strong>
        </div>
      )}
      {status === "fail" && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          ❌ De kluis blijft dicht. Probeer het opnieuw.
        </div>
      )}
    </div>
  );
};

export default TeamVault;
