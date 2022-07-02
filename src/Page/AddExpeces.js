import React, { useState } from "react";
import "./addExpences.css";

import useData from "../Hook/useData";

export default function AddExpeces() {
  const [name, setName] = useState(null);
  const [cost, setCost] = useState(null);
  const [group, setGroup] = useState(null);
  const [from, setFrom] = useState(null);

  const { addData } = useData();

  const handleSubmit = () => {
    console.log(name, cost, group, from);

    if (name && cost && group) {
      addData({ name, cost, group, from });
    }
  };

  return (
    <div className="addExpense-container">
      <div className="addExpense-form-containner">
        <div>
          <label>items/service</label>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label>cost</label>
          <input
            type="number"
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
        <div>
          <label>group</label>
          <input type="text" onChange={(e) => setGroup(e.target.value)}></input>
        </div>
        <div>
          <label>from</label>
          <input type="text" onChange={(e) => setFrom(e.target.value)}></input>
        </div>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}
