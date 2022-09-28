import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import AddToList from "./Components/AddToList";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

function App() {
  //I can declare the type down here
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      notes: "Allergic to staying on the same team",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList />
    </div>
  );
}

export default App;
